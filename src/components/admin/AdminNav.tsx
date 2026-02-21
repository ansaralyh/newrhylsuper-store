"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { Package, LayoutDashboard, Plus, LogOut } from "lucide-react";

export default function AdminNav({
  email,
}: {
  email?: string | null;
}) {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/admin" className="text-xl font-bold text-gray-800">
          Rhyl Admin
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600"
          >
            <Package className="w-4 h-4" />
            Products
          </Link>
          <Link
            href="/admin/add-product"
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </Link>
          <span className="text-sm text-gray-500">{email}</span>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-2 text-gray-600 hover:text-rose-500"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </nav>
      </div>
    </header>
  );
}
