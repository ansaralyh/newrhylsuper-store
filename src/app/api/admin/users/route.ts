import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { Admin } from "@/models/Admin";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user || (session.user as any).role === "user") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    
    // Fetch both regular users and admins
    const [users, admins] = await Promise.all([
      User.find().select("-password").sort({ createdAt: -1 }),
      Admin.find().select("-password").sort({ createdAt: -1 })
    ]);

    // Map regular users to include 'user' role
    const mappedUsers = users.map(u => ({
      id: u._id,
      name: u.name,
      email: u.email,
      role: "user",
      status: (u as any).status || "active",
      createdAt: u.createdAt.toISOString().split("T")[0]
    }));

    // Map admins
    const mappedAdmins = admins.map(a => ({
      id: a._id,
      name: a.name,
      email: a.email,
      role: a.role,
      status: a.status,
      createdAt: a.createdAt.toISOString().split("T")[0]
    }));

    return NextResponse.json([...mappedAdmins, ...mappedUsers]);
  } catch (error) {
    console.error("GET /api/admin/users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
