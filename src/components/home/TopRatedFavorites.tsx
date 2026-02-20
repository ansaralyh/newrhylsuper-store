"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { featuredProducts } from "@/data/products";
import { useStore } from "@/context/StoreContext";

const topRatedProducts = featuredProducts
  .slice(0, 8)
  .map((p, i) => ({ ...p, rank: i + 1 }));

export default function TopRatedFavorites() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useStore();

  return (
    <section className="bg-[#F8F8FA] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Top Rated{" "}
            <span className="text-[#2962FF] underline decoration-2 underline-offset-2">
              Favorites
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Our community&apos;s most beloved picks this month
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topRatedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Heart icon */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
                }}
                className={`absolute top-3 left-3 z-10 p-1.5 rounded-full transition-colors ${
                  isInWishlist(product.id)
                    ? "text-rose-500 bg-rose-50"
                    : "text-gray-400 hover:text-rose-500 bg-white/80"
                }`}
                aria-label="Add to favorites"
              >
                <Heart
                  className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-current" : ""}`}
                />
              </button>

              {/* Ranking label */}
              <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#2962FF] text-white text-xs font-bold rounded-lg border-2 border-white shadow">
                #{product.rank}
              </span>

              {/* Product image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mt-2">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                )}
              </div>

              {/* Product name */}
              <p className="mt-3 text-gray-800 font-medium text-sm text-center line-clamp-2">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
