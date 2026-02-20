"use client";

import Link from "next/link";
import { MapPin, Mail, Instagram, Twitter, Facebook, Linkedin, CreditCard, Truck, Shield, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-0 bg-[#0f172a] text-gray-300 mt-auto">
      {/* Main content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl md:text-3xl font-bold text-gray-200 block">RHYL</span>
              <span className="text-sm uppercase tracking-widest text-gray-400">Super Store</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              Experience the zenith of premium delivery. We curate the world&apos;s finest goods for those who demand excellence in every detail.
            </p>
            <div className="space-y-3 mb-6">
              <a href="https://maps.google.com" className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                32-34 Bedford Street, LL18 1SY
              </a>
              <a href="mailto:Walesuperstore77@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                Walesuperstore77@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-sky-400 hover:text-sky-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-sky-400 hover:text-sky-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-sky-400 hover:text-sky-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-sky-400 hover:text-sky-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-gray-200 font-bold text-sm uppercase tracking-widest mb-4">Collections</h3>
            <ul className="space-y-3">
              <li><Link href="/products?category=produce" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">Fresh Produce</Link></li>
              <li><Link href="/products?category=beverages" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">Gourmet Drinks</Link></li>
              <li><Link href="/products?category=personal-care" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">Designer Scents</Link></li>
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h3 className="text-gray-200 font-bold text-sm uppercase tracking-widest mb-4">Concierge</h3>
            <ul className="space-y-3">
              <li><Link href="/track-order" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">Track Order</Link></li>
              <li><Link href="/style-guide" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">Style Guide</Link></li>
              <li>
                <Link href="/admin" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Join the Elite - Newsletter */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-gray-200 font-bold text-lg mb-2">Join the Elite</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Subscribe for early access to limited artisanal drops and private events.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your premium email"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-600 text-gray-200 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
                <button className="p-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © 2025 Rhyl Luxury Lifestyle. Private & Confidential.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-xs uppercase tracking-wider transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-xs uppercase tracking-wider transition-colors">
                Global Terms
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="w-4 h-4 text-gray-500" />
              <Truck className="w-4 h-4 text-gray-500" />
              <Shield className="w-4 h-4 text-gray-500" />
              <span className="text-[10px] text-gray-500 font-medium uppercase">PCI-DSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
