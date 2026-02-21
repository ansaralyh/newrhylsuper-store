"use client";

import { AdminLayout } from "@/components/admin/AdminLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, 
  Upload, 
  Save, 
  X, 
  Image as ImageIcon,
  Loader2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    discountPrice: "",
    stock: "",
    description: "",
    image: null as File | null,
    status: "Active"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        data.append(key, value as any);
      }
    });

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Failed to create product");
      }

      router.push("/admin/products");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/admin/products" 
              className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Add New Product</h1>
              <p className="text-gray-500 text-sm mt-1">Fill in the details to list a new item in your store.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/admin/products"
              className="px-6 py-3 bg-gray-800 text-gray-400 rounded-xl text-sm font-bold hover:text-white transition-all border border-gray-700"
            >
              Cancel
            </Link>
            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-[#06b6d4] text-white rounded-xl text-sm font-bold hover:bg-[#0891b2] transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50 group"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              Publish Product
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-2xl flex items-center gap-3 text-rose-500 text-sm font-bold shadow-[0_0_20px_rgba(244,63,94,0.05)]">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form Content */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-gray-800/40 border border-gray-800 rounded-[2.5rem] p-8 md:p-10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Basic Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Product Name</label>
                  <input 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Fresh Organic Plantain"
                    className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-4 px-5 text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Category</label>
                    <select 
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-4 px-5 text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Category</option>
                      <option value="Vegetables">Vegetables</option>
                      <option value="Fruits">Fruits</option>
                      <option value="Grains">Grains</option>
                      <option value="Tubers">Tubers</option>
                      <option value="Oils">Oils</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Status</label>
                    <select 
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-4 px-5 text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all appearance-none cursor-pointer"
                    >
                      <option value="Active">Active</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Description</label>
                  <textarea 
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the product features, origin, and quality..."
                    className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-4 px-5 text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all resize-none"
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/40 border border-gray-800 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Pricing & Inventory</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Price (£)</label>
                  <input 
                    name="price"
                    type="number"
                    step="0.01"
                    required
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-4 px-5 text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Stock Quantity</label>
                  <input 
                    name="stock"
                    type="number"
                    required
                    value={formData.stock}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-4 px-5 text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Content (Image Upload) */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-gray-800/40 border border-gray-800 rounded-[2.5rem] p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Product Image</h3>
              <div className="space-y-4">
                <div className="w-full aspect-square bg-[#020617] border-2 border-dashed border-gray-800 rounded-3xl overflow-hidden relative group transition-all hover:border-[#06b6d4]/50">
                  {imagePreview ? (
                    <>
                      <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                      <button 
                        onClick={() => { setImagePreview(null); setFormData(p => ({ ...p, image: null })); }}
                        className="absolute top-4 right-4 w-8 h-8 bg-rose-500 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-rose-600 transition-all scale-0 group-hover:scale-100"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group">
                      <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-[#06b6d4]/10 group-hover:text-[#06b6d4] transition-all mb-4">
                        <Upload className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-bold text-gray-500 group-hover:text-white transition-colors">Click to upload</span>
                      <span className="text-[10px] text-gray-600 mt-1 uppercase tracking-widest font-bold">1080x1080 recommended</span>
                      <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                    </label>
                  )}
                </div>
                <div className="bg-gray-900/40 p-4 rounded-2xl border border-gray-800/50 flex gap-3">
                  <ImageIcon className="w-5 h-5 text-gray-500 shrink-0" />
                  <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                    Please ensure the product image is well-lit and shows the item clearly against a neutral background.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
