"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, Star, Menu } from "lucide-react";
import { useCart, type Product } from "@/contexts/CartContext";
import { ShoppingCart } from "@/components/ShoppingCart";
import Link from "next/link";

export default function KnivesPage() {
  const { addItem, setCartOpen } = useCart();
  const { addItem } = useCart();

  const knivesProducts: Product[] = [
    {
      id: 201,
      name: "Global - 2 PC Knife Set Chef Knife (G2) & Kitchen Knife (GS11) - G201",
      image: "https://ext.same-assets.com/141635960/3641721154.jpeg",
      price: 198.80,
      rating: 5,
      reviews: 0,
      brand: "Global",
      freeShipping: true,
      description: "Professional Japanese knife set featuring ultra-sharp stainless steel blades.",
      features: ["Ice-tempered stainless steel", "Seamless construction", "Ergonomic handle", "Dishwasher safe"],
      category: "Knives & Cutlery"
    },
    {
      id: 202,
      name: "Zwilling - Pro 8\" Chef's Knife - 38401-203",
      image: "https://ext.same-assets.com/141635960/1589770752.jpeg",
      price: 149.99,
      rating: 5,
      reviews: 87,
      brand: "Zwilling",
      freeShipping: true,
      description: "German-engineered chef's knife with precision-forged blade and ergonomic handle.",
      features: ["Friodur ice-hardened blade", "Precision-forged", "Full tang construction", "Lifetime warranty"],
      category: "Knives & Cutlery"
    },
    {
      id: 203,
      name: "Wusthof - Classic 6-Piece Knife Block Set",
      image: "https://ext.same-assets.com/141635960/947296389.jpeg",
      price: 299.99,
      rating: 5,
      reviews: 124,
      brand: "Wusthof",
      freeShipping: true,
      description: "Complete knife set with premium German steel and bamboo block.",
      features: ["High-carbon stainless steel", "Triple-riveted handles", "Full tang", "Bamboo block included"],
      category: "Knives & Cutlery"
    },
    {
      id: 204,
      name: "Victorinox - 4\" Paring Knife - 40600",
      image: "https://ext.same-assets.com/141635960/3641721154.jpeg",
      price: 12.99,
      rating: 5,
      reviews: 245,
      brand: "Victorinox",
      freeShipping: false,
      description: "Professional-grade paring knife perfect for precise cutting tasks.",
      features: ["High-carbon stainless steel", "Ergonomic handle", "Dishwasher safe", "NSF approved"],
      category: "Knives & Cutlery"
    },
    {
      id: 205,
      name: "Shun - Classic 8\" Chef's Knife - DM0706",
      image: "https://ext.same-assets.com/141635960/1589770752.jpeg",
      price: 189.95,
      rating: 5,
      reviews: 78,
      brand: "Shun",
      freeShipping: true,
      description: "Handcrafted Japanese chef's knife with Damascus-clad blade.",
      features: ["VG-MAX cutting core", "Damascus cladding", "D-shaped handle", "Hand-sharpened 16° edge"],
      category: "Knives & Cutlery"
    },
    {
      id: 206,
      name: "Henckels - International Statement 15-Piece Knife Set",
      image: "https://ext.same-assets.com/141635960/947296389.jpeg",
      price: 149.99,
      rating: 4,
      reviews: 156,
      brand: "Henckels",
      freeShipping: true,
      description: "Complete knife set with hardwood block and professional-grade knives.",
      features: ["Special formula steel", "Single-piece construction", "Triple-riveted handles", "Hardwood block"],
      category: "Knives & Cutlery"
    }
  ];

  const navItems = [
    { name: "Cookware", href: "/category/cookware" },
    { name: "Knives & Cutlery", href: "/category/knives" },
    { name: "Electrics", href: "/category/electrics" },
    { name: "Bakeware", href: "/category/bakeware" },
    { name: "Tabletop", href: "/category/tabletop" }
  ];

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-green-700 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>FREE SHIPPING* over $149</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              888-366-8594
            </div>
            <span>Expert Help</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-green-700 text-white px-3 py-2 font-bold text-xl">
                CHEF
                <br />
                SUPPLIES
              </div>
            </Link>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search 40,000+ products..."
                  className="pl-10 pr-4 py-3 w-full border-gray-300"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/account" className="text-gray-700 hover:text-green-700">My Account</Link>
              <ShoppingCart />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-8 py-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Menu className="w-5 h-5" />
                <Link href="/" className="hover:text-green-700">All Categories</Link>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-green-700 font-medium ${
                    item.name === "Knives & Cutlery" ? "text-green-700 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <span className="text-green-700 font-medium">Knives & Cutlery</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Knives & Cutlery</h1>
          <p className="text-lg text-gray-600">
            Professional kitchen knives and cutlery from the world's finest manufacturers.
            Sharp, durable, and designed for culinary excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knivesProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-green-700 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{product.reviews} Reviews</span>
                </div>

                <div className="mb-4">
                  <div className="text-green-700 font-semibold text-sm mb-1">Sale Price</div>
                  <div className="text-2xl font-bold text-gray-900">${product.price}</div>
                  {product.freeShipping && (
                    <Badge variant="outline" className="text-blue-600 border-blue-600 mt-2">
                      🚚 Free Shipping
                    </Badge>
                  )}
                </div>

                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 font-semibold"
                >
                  ADD TO CART
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="text-4xl font-bold mb-4">ChefNiche</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 text-xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-xl">FREE SHIPPING*</div>
                <div className="text-lg">Over $149</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-green-700" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xl">4.8 STARS</div>
                <div className="text-lg">700 reviews</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 text-xl">$</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-xl">PRICE MATCH</div>
                <div className="text-lg">Yes, just ask!</div>
              </div>
            </div>
          </div>

          <div className="text-center text-lg">
            © 2025 ChefNiche Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
