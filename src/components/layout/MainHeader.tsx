"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, Heart, User, Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { navItems } from "@/data/navItems";

export default function MainHeader() {
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 font-bold text-2xl text-emerald-700 hover:text-emerald-600 transition-colors"
          >
            Rhyl Super Store
          </Link>

          {/* Desktop Nav - Center */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center max-w-4xl">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="group relative py-2"
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors rounded hover:bg-emerald-50"
                >
                  {item.label}
                </Link>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-75">
                  <div className="bg-white rounded-lg shadow-lg border py-2 min-w-[180px]">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Section: Search, Icons, Login */}
          <div className="flex items-center gap-3 flex-1 lg:flex-initial justify-end">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-emerald-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all hidden sm:flex"
              aria-label="Wishlist"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Social Icons - Right side */}
            <div className="hidden md:flex items-center gap-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-pink-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-sky-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Login */}
            <Link
              href="/login"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              <User className="w-4 h-4" />
              Login
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white animate-fadeIn">
          <nav className="container mx-auto px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 font-medium text-gray-700"
                >
                  {item.label}
                </Link>
                <div className="pl-3 space-y-1">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-600"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-3 text-emerald-600 font-medium"
            >
              <User className="w-4 h-4" />
              Login / Register
            </Link>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 sm:hidden">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-sky-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
