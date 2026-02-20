export const categoryBarItems: { label: string; href: string; subItems: { label: string; href: string }[] }[] = [
  { label: "GROCERY", href: "/products?category=grocery", subItems: [
    { label: "Fruits", href: "/products?category=fruits" },
    { label: "Vegetables", href: "/products?category=vegetables" },
    { label: "Spices", href: "/products?category=spices" },
    { label: "Cereals", href: "/products?category=cereals" },
    { label: "Dried Goods", href: "/products?category=dried-goods" },
  ]},
  { label: "BABY CARE", href: "/products?category=baby-care", subItems: [
    { label: "Nappies", href: "/products?category=nappies" },
    { label: "Baby Food", href: "/products?category=baby-food" },
    { label: "Baby Wipes", href: "/products?category=baby-wipes" },
  ]},
  { label: "BAKERY", href: "/products?category=bakery", subItems: [
    { label: "Bread", href: "/products?category=bread" },
    { label: "Cakes", href: "/products?category=cakes" },
    { label: "Biscuits", href: "/products?category=biscuits" },
  ]},
  { label: "FROZEN", href: "/products?category=frozen", subItems: [
    { label: "Ice Cream", href: "/products?category=ice-cream" },
    { label: "Frozen Veg", href: "/products?category=frozen-veg" },
    { label: "Frozen Meals", href: "/products?category=frozen-meals" },
  ]},
  { label: "CONFECTIONERY", href: "/products?category=confectionery", subItems: [
    { label: "Chocolate", href: "/products?category=chocolate" },
    { label: "Sweets", href: "/products?category=sweets" },
    { label: "Snacks", href: "/products?category=snacks" },
  ]},
  { label: "ASIAN PRODUCTS", href: "/products?category=asian", subItems: [
    { label: "Rice & Noodles", href: "/products?category=rice-noodles" },
    { label: "Sauces", href: "/products?category=asian-sauces" },
    { label: "Spices", href: "/products?category=asian-spices" },
  ]},
  { label: "AFRICAN PRODUCT", href: "/products?category=african", subItems: [
    { label: "Grains", href: "/products?category=grains" },
    { label: "Spices", href: "/products?category=african-spices" },
  ]},
  { label: "THAI & PHILIPPINES", href: "/products?category=thai-philippines", subItems: [
    { label: "Noodles", href: "/products?category=noodles" },
    { label: "Sauces", href: "/products?category=thai-sauces" },
  ]},
  { label: "CATERING", href: "/products?category=catering", subItems: [
    { label: "Bulk Items", href: "/products?category=bulk" },
    { label: "Party Supplies", href: "/products?category=party" },
  ]},
];
