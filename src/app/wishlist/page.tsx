"use client";

import { useStore } from "@/context/StoreContext";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, isInWishlist } = useStore();

  const items = wishlist.length > 0 ? wishlist : [];

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h1>
        <p className="text-gray-500 mb-6">Save items you love by clicking the heart on any product.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Your Wishlist</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromWishlist(product.id);
                  }}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-rose-500 text-white flex items-center justify-center opacity-90 hover:opacity-100"
                  aria-label="Remove from wishlist"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
                <p className="text-emerald-600 font-bold mt-1">£{product.price}</p>
              </div>
            </Link>
            <div className="px-4 pb-4">
              <button
                onClick={() => addToCart(product)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
