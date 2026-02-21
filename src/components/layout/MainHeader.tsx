"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { Search, ShoppingCart, Heart, User, Menu, X, Facebook, Instagram, ShieldCheck } from "lucide-react";
import { categoryBarItems } from "@/data/categoryBar";
import { useStore } from "@/context/StoreContext";

export default function MainHeader() {
  const { cartCount } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useLayoutEffect(() => {
    if (!openDropdown) return;
    const btn = buttonRefs.current[openDropdown];
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setDropdownPos({ top: rect.bottom + 4, left: rect.left });
  }, [openDropdown]);

  const activeItem = openDropdown ? categoryBarItems.find((i) => i.label === openDropdown) : null;

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50 overflow-visible">
      {/* Main nav row */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Logo - Rhyl logo image + Super Store */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image src="/rhyl-logo-new.jpeg" alt="Rhyl" width={100} height={44} className="h-11 w-auto object-contain" />
            <span className="text-red-600 font-bold text-sm uppercase tracking-wide">Super Store</span>
          </Link>

          {/* Center - Search */}
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search Products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Right - Social, User, Wishlist, Cart */}
          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white hover:opacity-90" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white hover:opacity-90" aria-label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <Link href="/admin/login" className="p-2 text-gray-600 hover:text-blue-600" aria-label="Admin Login">
              <User className="w-6 h-6" />
            </Link>
            <Link href="/wishlist" className="p-2 text-gray-600 hover:text-rose-500" aria-label="Wishlist">
              <Heart className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-blue-600" aria-label="Cart">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-0.5 -right-0.5 text-xs font-bold">{cartCount}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search Products..."
              className="w-full pl-11 pr-4 py-2 bg-gray-100 rounded-full text-sm"
            />
          </div>
        </div>
      </div>

      {/* Category bar - Yellow with dropdowns */}
      <div className="bg-amber-400 border-t border-amber-500 overflow-visible">
        <div className="container mx-auto px-4 overflow-visible">
          <div className="overflow-x-auto overflow-y-visible scrollbar-hide py-2 -mx-4 px-4">
            <nav className="flex items-center gap-1 min-w-max">
              {categoryBarItems.map((item) => (
                <div
                  key={item.label}
                  className="group relative shrink-0"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    ref={(el) => { buttonRefs.current[item.label] = el; }}
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-gray-800 uppercase hover:bg-amber-500/50 rounded transition-colors w-full text-left"
                  >
                    {item.label}
                    <svg className={`w-3 h-3 shrink-0 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Dropdown via portal - in front, no scroll */}
        {typeof document !== "undefined" && activeItem && createPortal(
          <div
            className="fixed z-[9999] min-w-[220px]"
            style={{ top: dropdownPos.top + 8, left: dropdownPos.left }}
            onMouseEnter={() => setOpenDropdown(activeItem.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* Arrow */}
            <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100 z-10 shadow-sm"></div>
            
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100/50 py-3 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top">
              <div className="px-5 py-2 mb-2 border-b border-gray-50 bg-gray-50/50">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                  Browse {activeItem.label}
                </span>
              </div>
              
              <div className="space-y-0.5 px-2">
                {activeItem.subItems.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></div>
                    {sub.label}
                  </Link>
                ))}
              </div>

              <div className="mt-2 pt-2 px-2 border-t border-gray-50">
                <Link 
                  href={activeItem.href} 
                  className="flex items-center justify-between px-4 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" 
                  onClick={() => setOpenDropdown(null)}
                >
                  View All Collection
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white py-4">
          <nav className="container mx-auto px-4 space-y-2">
            {categoryBarItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-gray-700">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
