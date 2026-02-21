import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { Admin } from "@/models/Admin";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user || (session.user as any).role === "user") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    
    // Fetch counts and basic stats
    const [totalProducts, totalUsers, totalAdmins] = await Promise.all([
      Product.countDocuments(),
      User.countDocuments(),
      Admin.countDocuments()
    ]);

    // Simulated revenue for now, in a real app this would query an 'Orders' collection
    const stats = {
      totalRevenue: "£54,232", // Placeholder
      totalOrders: "1,254",    // Placeholder
      totalUsers: totalUsers + totalAdmins,
      growthRate: "22.4%",     // Placeholder
      activeProducts: totalProducts
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("GET /api/admin/stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
