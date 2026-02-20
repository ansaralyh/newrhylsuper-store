"use client";

import { useStore } from "@/context/StoreContext";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useStore();

  const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
  const delivery = subtotal >= 30 ? 0 : 2.99;
  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-6">Add some items from our store to get started.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 shadow-sm"
            >
              <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                {item.image && (
                  <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.id}`} className="font-semibold text-gray-800 hover:text-emerald-600">
                  {item.name}
                </Link>
                <p className="text-emerald-600 font-bold mt-1">£{item.price}</p>
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto p-2 text-gray-400 hover:text-rose-500"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-100 p-6 sticky top-24 shadow-sm">
            <h2 className="font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span>{delivery === 0 ? "Free" : `£${delivery.toFixed(2)}`}</span>
              </div>
              {subtotal < 30 && (
                <p className="text-emerald-600 text-xs">Add £{(30 - subtotal).toFixed(2)} more for free delivery</p>
              )}
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block w-full py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors text-center"
            >
              Proceed to Checkout
            </Link>
            <Link href="/" className="mt-3 block text-center text-sm text-gray-500 hover:text-gray-700">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
