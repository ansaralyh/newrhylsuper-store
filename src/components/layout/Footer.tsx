import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Rhyl Super Store</h3>
            <p className="text-sm">
              Your trusted neighborhood grocery superstore. Fresh produce, everyday essentials, and great prices.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-emerald-400 transition-colors">Products</Link></li>
              <li><Link href="/cart" className="hover:text-emerald-400 transition-colors">Cart</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link href="/delivery" className="hover:text-emerald-400 transition-colors">Delivery Info</Link></li>
              <li><Link href="/returns" className="hover:text-emerald-400 transition-colors">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Get the latest offers and updates.</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="mt-2 w-full py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Rhyl Super Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
