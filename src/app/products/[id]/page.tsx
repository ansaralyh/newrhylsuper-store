import { notFound } from "next/navigation";
import { featuredProducts } from "@/data/products";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = featuredProducts.find((p) => p.id === id);
  if (!product) notFound();
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-emerald-600 hover:underline mb-4 inline-block">
        ← Back to home
      </Link>
      <h1 className="text-2xl font-bold">{product.name}</h1>
    </div>
  );
}
