import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:opacity-80">
          Rhyl Super Store
        </Link>
        <div className="flex gap-4">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/cart" className="hover:underline">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
