"use client";

import { ArrowRight, Utensils, Truck, Leaf, Percent, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FeaturedCollections() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-yellow-400" />,
      title: "Fast Delivery",
      desc: "Within 12 hours",
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-400" />,
      title: "Fresh Products",
      desc: "Quality guaranteed",
    },
    {
      icon: <Percent className="w-6 h-6 text-orange-400" />,
      title: "Best Prices",
      desc: "Save every day",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Secure Payment",
      desc: "100% safe checkout",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Featured <span className="text-blue-600">Collections</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Discover our curated selection of premium products
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 lg:p-16 text-white shadow-2xl">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }}
        ></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">
              Premium Quality
            </span>
            <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Fresh Groceries <br />
              <span className="text-yellow-400">Delivered Daily</span>
            </h3>
            <p className="text-white/80 text-lg md:text-xl max-w-lg leading-relaxed">
              Shop from our wide range of fresh produce, dairy, meats, and household essentials. Quality products at great prices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl flex items-center gap-2 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/catering"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-white/20 transition-all active:scale-95"
              >
                Catering <Utensils className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl flex flex-col items-center text-center space-y-3 hover:bg-white/15 transition-all cursor-default group"
              >
                <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-white/60 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
