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

export default function BakewarePage() {
  const { addItem, setCartOpen } = useCart();
  const { addItem } = useCart();

  const bakewareProducts: Product[] = [
    {
      id: 401,
      name: "Emile Henry - 15.4\" x 9.4\" Ceramic Burgundy Baguette Baking Mold - 345500",
      image: "https://ext.same-assets.com/141635960/1589770752.jpeg",
      price: 177.77,
      rating: 4,
      reviews: 3,
      brand: "Emile Henry",
      freeShipping: true,
      description: "Create perfect baguettes at home with this professional-grade ceramic baking mold from Emile Henry.",
      features: ["Professional ceramic construction", "Even heat distribution", "Easy release surface", "Dishwasher safe"],
      category: "Bakeware"
    },
    {
      id: 402,
      name: "Nordic Ware - Heritage Bundt Pan - 10 Cup",
      image: "https://ext.same-assets.com/141635960/947296389.jpeg",
      price: 49.95,
      rating: 5,
      reviews: 187,
      brand: "Nordic Ware",
      freeShipping: false,
      description: "Classic bundt pan with intricate design details for beautiful presentation cakes.",
      features: ["Cast aluminum construction", "Non-stick coating", "Made in USA", "10-cup capacity"],
      category: "Bakeware"
    },
    {
      id: 403,
      name: "All-Clad - Pro-Release 9\" Round Cake Pan",
      image: "https://ext.same-assets.com/141635960/3641721154.jpeg",
      price: 34.95,
      rating: 5,
      reviews: 134,
      brand: "All-Clad",
      freeShipping: false,
      description: "Professional cake pan with superior release coating for perfect results every time.",
      features: ["Aluminized steel", "Pro-Release coating", "Even heat distribution", "Dishwasher safe"],
      category: "Bakeware"
    },
    {
      id: 404,
      name: "Le Creuset - Silicone Baking Mat Set - 2 Pack",
      image: "https://ext.same-assets.com/141635960/1589770752.jpeg",
      price: 79.95,
      rating: 5,
      reviews: 89,
      brand: "Le Creuset",
      freeShipping: false,
      description: "Reusable silicone baking mats that replace parchment paper for eco-friendly baking.",
      features: ["Food-grade silicone", "Temperature resistant", "Non-stick surface", "Easy cleanup"],
      category: "Bakeware"
    },
    {
      id: 405,
      name: "KitchenAid - 3-Piece Mixing Bowl Set - Stainless Steel",
      image: "https://ext.same-assets.com/141635960/947296389.jpeg",
      price: 89.99,
      rating: 5,
      reviews: 156,
      brand: "KitchenAid",
      freeShipping: false,
      description: "Nested stainless steel mixing bowls with non-slip base and pour spouts.",
      features: ["Stainless steel construction", "Non-slip base", "Pour spouts", "Dishwasher safe"],
      category: "Bakeware"
    },
    {
      id: 406,
      name: "USA Pan - Quarter Sheet Pan - Aluminized Steel",
      image: "https://ext.same-assets.com/141635960/3641721154.jpeg",
      price: 19.95,
      rating: 5,
      reviews: 267,
      brand: "USA Pan",
      freeShipping: false,
      description: "Professional-grade quarter sheet pan perfect for cookies, roasting, and more.",
      features: ["Aluminized steel", "Corrugated surface", "Made in USA", "Commercial grade"],
      category: "Bakeware"
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
                    item.name === "Bakeware" ? "text-green-700 font-semibold" : ""
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
          <span className="text-green-700 font-medium">Bakeware</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bakeware</h1>
          <p className="text-lg text-gray-600">
            Professional baking pans, molds, and accessories for perfect results every time.
            From cake pans to cookie sheets, find everything you need for your baking adventures.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bakewareProducts.map((product) => (
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
