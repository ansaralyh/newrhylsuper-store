import Link from "next/link";
import { categoryCards } from "@/data/categoryCards";

export default function CategoryCards() {
  return (
    <section className="bg-[#F8F8FA] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categoryCards.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-gray-300 transition-all group"
            >
              <div className="w-14 h-14 mb-3 flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                <cat.icon className="w-10 h-10 stroke-[1.5]" strokeWidth={1.5} />
              </div>
              <span className="font-bold text-gray-800 text-sm leading-tight">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
