import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { Admin } from "@/models/Admin";

export async function POST() {
  try {
    await connectDB();
    const existing = await Admin.findOne({ email: "admin@rhyl.com" });
    if (existing) {
      return NextResponse.json({ message: "Admin already exists" });
    }
    const hashed = await bcrypt.hash("admin123", 12);
    await Admin.create({
      email: "admin@rhyl.com",
      password: hashed,
      name: "Admin",
    });
    return NextResponse.json({
      message: "Admin created. Email: admin@rhyl.com, Password: admin123",
    });
  } catch (error) {
    console.error("Seed admin:", error);
    return NextResponse.json(
      { error: "Failed to seed admin" },
      { status: 500 }
    );
  }
}
