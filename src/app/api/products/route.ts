import { NextResponse } from "next/server";
import type { Product } from "@/types";

export async function GET() {
  // Placeholder API - replace with your data source
  const products: Product[] = [];
  return NextResponse.json(products);
}
