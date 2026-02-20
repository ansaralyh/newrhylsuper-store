import type { LucideIcon } from "lucide-react";
import { Apple, Wheat, Flame, Milk, Snowflake, Package, Cookie, Coffee, Home, Smile, Flag } from "lucide-react";

export interface CategoryCard {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const categoryCards: CategoryCard[] = [
  { id: "1", label: "Fresh Produce", href: "/products?category=produce", icon: Apple },
  { id: "2", label: "Grocery & Staples", href: "/products?category=grocery", icon: Wheat },
  { id: "3", label: "Spices & Masala", href: "/products?category=spices", icon: Flame },
  { id: "4", label: "Dairy Products", href: "/products?category=dairy", icon: Milk },
  { id: "5", label: "Meat & Frozen", href: "/products?category=frozen", icon: Snowflake },
  { id: "6", label: "Packaged Food", href: "/products?category=packaged", icon: Package },
  { id: "7", label: "Snacks & Bakery", href: "/products?category=bakery", icon: Cookie },
  { id: "8", label: "Beverages", href: "/products?category=beverages", icon: Coffee },
  { id: "9", label: "Household", href: "/products?category=household", icon: Home },
  { id: "10", label: "Personal Care", href: "/products?category=personal-care", icon: Smile },
  { id: "11", label: "Thai & Philippines", href: "/products?category=thai-philippines", icon: Flag },
];
