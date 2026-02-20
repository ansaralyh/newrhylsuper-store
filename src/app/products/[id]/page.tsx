import { notFound } from "next/navigation";
import { featuredProducts } from "@/data/products";
import ProductDetailClient from "@/components/products/ProductDetailClient";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = featuredProducts.find((p) => p.id === id);
  if (!product) notFound();
  return <ProductDetailClient product={product} />;
}
