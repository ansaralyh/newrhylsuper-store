import { featuredProducts } from "@/data/products";
import { productSectionHeadings } from "@/data/productSections";
import ProductCard from "@/components/products/ProductCard";
import CategorySectionHeading from "./CategorySectionHeading";

type GridItem =
  | { type: "heading"; title: string; accentColor: "amber" | "teal" | "rose" | "emerald" | "blue" }
  | { type: "product"; product: (typeof featuredProducts)[0] };

export default function ProductGrid() {
  const items: GridItem[] = [];
  let headingIndex = 0;

  featuredProducts.forEach((product, index) => {
    if (index % 4 === 0) {
      const heading = productSectionHeadings[headingIndex % productSectionHeadings.length];
      items.push({ type: "heading", title: heading.title, accentColor: heading.accentColor });
      headingIndex++;
    }
    items.push({ type: "product", product });
  });

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Popular Products
        </h2>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Categories</option>
            <option>Beverages</option>
            <option>Dairy</option>
            <option>Pantry</option>
            <option>Snacks</option>
            <option>Produce</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>Sort: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, idx) =>
          item.type === "heading" ? (
            <CategorySectionHeading
              key={`section-${idx}-${item.title}`}
              title={item.title}
              accentColor={item.accentColor}
            />
          ) : (
            <ProductCard key={item.product.id} product={item.product} />
          )
        )}
      </div>
    </section>
  );
}
