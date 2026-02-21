import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { uploadImage } from "@/lib/cloudinary";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /api/products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const price = parseFloat(formData.get("price") as string);
    const discountPrice = formData.get("discountPrice")
      ? parseFloat(formData.get("discountPrice") as string)
      : undefined;
    const description = (formData.get("description") as string) || "";
    const stock = parseInt(formData.get("stock") as string) || 0;
    const imageFile = formData.get("image") as File;

    if (!name || !category || !price || !imageFile) {
      return NextResponse.json(
        { error: "Name, category, price, and image are required" },
        { status: 400 }
      );
    }

    const imageUrl = await uploadImage(imageFile);

    const slug =
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") +
      "-" +
      Date.now();

    await connectDB();
    const product = await Product.create({
      name,
      slug,
      category,
      price,
      discountPrice,
      description,
      imageUrl,
      stock,
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("POST /api/products:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
