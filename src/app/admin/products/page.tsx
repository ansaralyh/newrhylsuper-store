"use client";

import { AdminLayout } from "@/components/admin/AdminLayout";
import { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit2, 
  Trash2, 
  ShoppingBag,
  ArrowUpDown,
  CheckCircle2,
  XCircle,
  Loader2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Helper to make Tailwind colors dynamic
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      setProducts(prev => prev.filter(p => (p._id || p.id) !== id));
    } catch (err) {
      alert("Error deleting product. Please try again.");
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-8 animate-in fade-in duration-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Products</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your inventory and product listings.</p>
          </div>
          <Link 
            href="/admin/products/new"
            className="flex items-center gap-2 px-6 py-3 bg-[#06b6d4] text-white rounded-xl font-bold hover:bg-[#0891b2] transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] group active:scale-95 leading-none"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            Add New Product
          </Link>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-800/40 border border-gray-800 p-4 rounded-2xl">
          <div className="relative flex-1 w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#06b6d4] transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#020617] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-gray-700 transition-all flex-1 md:flex-none">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-gray-700 transition-all flex-1 md:flex-none">
              <ArrowUpDown className="w-4 h-4" />
              Sort
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-gray-800/40 border border-gray-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900/50 border-b border-gray-800">
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Product</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Category</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Price</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Stock</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Status</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="w-10 h-10 text-[#06b6d4] animate-spin" />
                        <p className="text-gray-500 font-medium">Loading products...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <ShoppingBag className="w-10 h-10 text-gray-700" />
                        <p className="text-gray-500 font-medium">No products found.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product._id || product.id} className="hover:bg-gray-800/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 overflow-hidden shrink-0 relative">
                            <Image 
                              src={product.image || product.imageUrl || "/placeholder.jpg"} 
                              alt={product.name} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform" 
                              unoptimized
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-white truncate">{product.name}</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-tighter font-bold font-sans">ID: {product._id?.slice(-8) || "N/A"}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-gray-900 text-gray-400 text-[10px] font-bold rounded-lg border border-gray-800 uppercase tracking-widest leading-none">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-white leading-none">£{parseFloat(product.price).toFixed(2)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className={cn(
                            "text-sm font-bold leading-none",
                            product.stock < 10 ? "text-rose-500" : "text-gray-300"
                          )}>
                            {product.stock}
                          </span>
                          <div className="w-16 h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                            <div 
                              className={cn(
                                "h-full transition-all duration-1000",
                                product.stock < 10 ? "bg-rose-500" : "bg-[#06b6d4]"
                              )}
                              style={{ width: `${Math.min(product.stock, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest leading-none",
                          product.status === "Active" || !product.status
                            ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" 
                            : "bg-gray-500/10 text-gray-500 border border-gray-500/20"
                        )}>
                          {product.status === "Draft" ? <XCircle className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                          {product.status || "Active"}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                          <button className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-[#06b6d4] hover:bg-[#06b6d4]/10 transition-all font-sans">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(product._id || product.id, product.name)}
                            className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-rose-500 hover:bg-rose-500/10 transition-all font-sans"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white transition-all font-sans leading-none">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-5 bg-gray-900/30 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-none">
              Showing <span className="text-white">{filteredProducts.length}</span> of <span className="text-white">{products.length}</span> products
            </p>
            <div className="flex items-center gap-2">
              <button disabled className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-xs font-bold text-gray-600 disabled:opacity-50 transition-all tracking-widest uppercase leading-none">
                Previous
              </button>
              <div className="flex gap-1">
                {[1].map(n => (
                  <button key={n} className="w-9 h-9 rounded-xl bg-[#06b6d4] text-white text-xs font-bold leading-none">{n}</button>
                ))}
              </div>
              <button disabled className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-xs font-bold text-gray-400 hover:text-white transition-all tracking-widest uppercase leading-none">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
