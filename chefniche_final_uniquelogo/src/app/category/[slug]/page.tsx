"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import { useCart, type Product } from "@/contexts/CartContext";
import { ShoppingCart } from "@/components/ShoppingCart";
import Link from "next/link";

// Expanded product database
const allProducts: Product[] = [
  // Home Products
  {
    id: 1,
    name: "Ooni - Karu 2 Multi-Fuel Pizza Oven - UU-P25100",
    image: "https://ext.same-assets.com/141635960/947296389.jpeg",
    price: 494.97,
    rating: 5,
    reviews: 0,
    brand: "Ooni",
    freeShipping: true,
    description: "The Karu 2 is our most advanced portable pizza oven yet.",
    category: "Cookware"
  },
  {
    id: 2,
    name: "Emile Henry - 15.4\" x 9.4\" Ceramic Burgundy Baguette Baking Mold",
    image: "https://ext.same-assets.com/141635960/1589770752.jpeg",
    price: 177.77,
    rating: 4,
    reviews: 3,
    brand: "Emile Henry",
    freeShipping: true,
    description: "Create perfect baguettes at home with this professional-grade ceramic baking mold.",
    category: "Bakeware"
  },
  {
    id: 3,
    name: "All-Clad - 11\" HA1 Non-Stick Square Griddle",
    image: "https://ext.same-assets.com/141635960/3641721154.jpeg",
    price: 79.99,
    rating: 5,
    reviews: 21,
    brand: "All-Clad",
    freeShipping: false,
    description: "Professional-grade non-stick griddle perfect for pancakes and grilled sandwiches.",
    category: "Cookware"
  },
  {
    id: 4,
    name: "Technivorm - Moccamaster KBG Select 40 Oz Black Coffee Maker",
    image: "https://ext.same-assets.com/141635960/2135324251.jpeg",
    price: 479.99,
    rating: 5,
    reviews: 28,
    brand: "Technivorm",
    freeShipping: true,
    description: "The world's finest coffee maker, handmade in the Netherlands since 1968.",
    category: "Electrics"
  },
  {
    id: 5,
    name: "Ember - Mug² 12 Oz Black Smart Temperature Travel Mug",
    image: "https://ext.same-assets.com/141635960/358032945.jpeg",
    price: 224.97,
    rating: 4,
    reviews: 0,
    brand: "Ember",
    freeShipping: true,
    description: "Smart mug that maintains your perfect drinking temperature for hours.",
    category: "Electrics"
  },
  {
    id: 6,
    name: "Global - 2 PC Knife Set Chef Knife (G2) & Kitchen Knife (GS11)",
    image: "https://ext.same-assets.com/141635960/2116998487.jpeg",
    price: 198.80,
    rating: 5,
    reviews: 0,
    brand: "Global",
    freeShipping: true,
    description: "Professional Japanese knife set featuring Global's signature design.",
    category: "Knives & Cutlery"
  },
  // Additional Cookware
  {
    id: 10,
    name: "Lodge - Cast Iron Skillet 12 Inch",
    image: "https://ext.same-assets.com/141635960/3123364184.png",
    price: 45.99,
    rating: 5,
    reviews: 156,
    brand: "Lodge",
    freeShipping: false,
    description: "Pre-seasoned cast iron skillet perfect for searing, baking, and frying.",
    category: "Cookware"
  },
  {
    id: 11,
    name: "All-Clad - Stainless Steel Tri-Ply 3-Qt Saucepan",
    image: "https://ext.same-assets.com/141635960/3928379540.png",
    price: 189.99,
    rating: 5,
    reviews: 89,
    brand: "All-Clad",
    freeShipping: true,
    description: "Professional tri-ply stainless steel saucepan with aluminum core.",
    category: "Cookware"
  },
  // Additional Knives
  {
    id: 12,
    name: "Zwilling - Professional S 8-inch Chef's Knife",
    image: "https://ext.same-assets.com/141635960/815511873.png",
    price: 129.99,
    rating: 5,
    reviews: 67,
    brand: "Zwilling",
    freeShipping: true,
    description: "German-engineered chef's knife with ice-hardened FRIODUR blade.",
    category: "Knives & Cutlery"
  },
  {
    id: 13,
    name: "Global - 7-inch Santoku Knife G-48",
    image: "https://ext.same-assets.com/141635960/667018892.png",
    price: 84.99,
    rating: 5,
    reviews: 43,
    brand: "Global",
    freeShipping: false,
    description: "Lightweight, perfectly balanced Japanese santoku knife.",
    category: "Knives & Cutlery"
  },
  // Additional Electrics
  {
    id: 14,
    name: "KitchenAid - Artisan Stand Mixer 5-Quart",
    image: "https://ext.same-assets.com/141635960/3821172289.png",
    price: 379.99,
    rating: 5,
    reviews: 234,
    brand: "KitchenAid",
    freeShipping: true,
    description: "Iconic stand mixer with 10 speeds and tilt-head design.",
    category: "Electrics"
  },
  {
    id: 15,
    name: "Cuisinart - Elemental 8-Cup Food Processor",
    image: "https://ext.same-assets.com/141635960/2403183821.png",
    price: 149.99,
    rating: 4,
    reviews: 78,
    brand: "Cuisinart",
    freeShipping: true,
    description: "Powerful food processor with multiple blade options.",
    category: "Electrics"
  },
  // Additional Bakeware
  {
    id: 16,
    name: "Nordic Ware - Heritage Bundt Pan",
    image: "https://ext.same-assets.com/141635960/2728010701.png",
    price: 36.99,
    rating: 5,
    reviews: 92,
    brand: "Nordic Ware",
    freeShipping: false,
    description: "Cast aluminum bundt pan with superior heat conductivity.",
    category: "Bakeware"
  },
  {
    id: 17,
    name: "Emile Henry - 9x13 Ceramic Baking Dish",
    image: "https://ext.same-assets.com/141635960/2638663383.png",
    price: 89.99,
    rating: 4,
    reviews: 56,
    brand: "Emile Henry",
    freeShipping: true,
    description: "Ceramic baking dish that goes from oven to table beautifully.",
    category: "Bakeware"
  },
  // Additional Tabletop
  {
    id: 18,
    name: "Riedel - Vinum Cabernet Wine Glasses (Set of 2)",
    image: "https://ext.same-assets.com/141635960/3250706672.png",
    price: 59.99,
    rating: 5,
    reviews: 124,
    brand: "Riedel",
    freeShipping: false,
    description: "Crystal wine glasses designed specifically for Cabernet Sauvignon.",
    category: "Tabletop"
  },
  {
    id: 19,
    name: "Fortessa - Grand City 5-Piece Place Setting",
    image: "https://ext.same-assets.com/141635960/1218016352.png",
    price: 42.99,
    rating: 4,
    reviews: 38,
    brand: "Fortessa",
    freeShipping: false,
    description: "Modern stainless steel flatware with clean lines.",
    category: "Tabletop"
  }
];

const categoryData = {
  cookware: {
    title: "Cookware",
    description: "Professional cookware for every kitchen need",
    slug: "cookware"
  },
  "knives-cutlery": {
    title: "Knives & Cutlery",
    description: "Sharp, professional knives and cutting tools",
    slug: "knives-cutlery"
  },
  electrics: {
    title: "Electrics",
    description: "Kitchen appliances and electrical tools",
    slug: "electrics"
  },
  bakeware: {
    title: "Bakeware",
    description: "Baking pans, molds, and accessories",
    slug: "bakeware"
  },
  tabletop: {
    title: "Tabletop",
    description: "Dinnerware, glassware, and serving pieces",
    slug: "tabletop"
  }
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const slug = params.slug as string;
  const category = categoryData[slug as keyof typeof categoryData];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Category not found</h2>
          <Link href="/">
            <Button className="bg-green-700 hover:bg-green-800">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Filter products by category - handle the mapping
  const categoryMap = {
    "knives-cutlery": "Knives & Cutlery",
    "cookware": "Cookware",
    "electrics": "Electrics",
    "bakeware": "Bakeware",
    "tabletop": "Tabletop"
  };

  const categoryName = categoryMap[slug as keyof typeof categoryMap];
  const filteredProducts = allProducts.filter(product => product.category === categoryName);

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                src="https://ext.same-assets.com/141635960/1535866198.png"
                alt="ChefNiche"
                className="h-12 cursor-pointer"
              />
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">My Account</Button>
              <ShoppingCart />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <span className="text-gray-800">{category.title}</span>
        </div>

        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{category.description}</p>
          <div className="text-sm text-gray-500">
            Showing {filteredProducts.length} products
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform p-4"
                      />
                    </div>
                  </Link>

                  <div className="space-y-3">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem] hover:text-green-700 cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {product.reviews} Reviews
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-green-700">
                          Sale Price
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          ${product.price}
                        </div>
                      </div>
                      {product.freeShipping && (
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                          🚚 Free Shipping
                        </Badge>
                      )}
                    </div>

                    <Button
                      className="w-full bg-green-700 hover:bg-green-800 text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">No products found in this category</h3>
            <p className="text-gray-600 mb-6">We're constantly adding new products. Check back soon!</p>
            <Link href="/">
              <Button className="bg-green-700 hover:bg-green-800">
                Browse All Products
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
