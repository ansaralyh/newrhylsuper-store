"use client";

import { useStore } from "@/context/StoreContext";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const { cart } = useStore();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
        <Link href="/" className="text-emerald-600 hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Checkout</h1>
        <p className="text-gray-500 mb-6">
          Checkout flow coming soon. For now, your cart has {cart.length} item{cart.length !== 1 ? "s" : ""}.
        </p>
        <Link
          href="/cart"
          className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700"
        >
          Back to Cart
        </Link>
      </div>
    </div>
  );
}
