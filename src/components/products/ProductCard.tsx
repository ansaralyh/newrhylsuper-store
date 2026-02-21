"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Package, Check } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const wishlisted = isInWishlist(product.id);
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgFallbackError, setImgFallbackError] = useState(false);
  const rating = product.rating ?? 4.5;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          {product.image && !imgError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-500 ${
                hovered ? "scale-110" : "scale-100"
              }`}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={() => setImgError(true)}
              unoptimized
            />
          ) : product.image && !imgFallbackError ? (
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hovered ? "scale-110" : "scale-100"
              }`}
              onError={() => setImgFallbackError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              wishlisted ? removeFromWishlist(product.id) : addToWishlist(product);
            }}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all z-10 ${
              wishlisted
                ? "bg-rose-500 text-white"
                : "bg-white/90 text-gray-600 hover:bg-rose-500 hover:text-white"
            }`}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`w-4 h-4 ${wishlisted ? "fill-current" : ""}`}
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-lg font-bold text-emerald-600">
              £{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                £{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium transition-all duration-300 ${
            added 
              ? "bg-emerald-100 text-emerald-700 border border-emerald-200" 
              : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm hover:shadow"
          }`}
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
