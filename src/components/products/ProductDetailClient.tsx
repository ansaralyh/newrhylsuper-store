"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, ArrowLeft } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import type { Product } from "@/types";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const wishlisted = isInWishlist(product.id);
  const rating = product.rating ?? 4.5;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          )}
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            <span className="text-gray-600">{rating}</span>
          </div>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-2xl font-bold text-emerald-600">£{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through">£{product.originalPrice}</span>
            )}
          </div>
          {product.description && (
            <p className="mt-4 text-gray-600">{product.description}</p>
          )}
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button
              onClick={() => (wishlisted ? removeFromWishlist(product.id) : addToWishlist(product))}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                wishlisted ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-rose-50 hover:text-rose-500"
              }`}
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
