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

export default function ElectricsPage() {
  const { addItem, setCartOpen } = useCart();
  const { addItem } = useCart();

  const electricsProducts: Product[] = [
    {
      id: 301,
      name: "Technivorm - Moccamaster KBG Select 40 Oz Black Coffee Maker with Glass Carafe - 53922",
      image: "https://ext.same-assets.com/141635960/1589770752.jpeg",
      price: 479.99,
      rating: 5,
      reviews: 28,
      brand: "Technivorm",
      freeShipping: true,
      description: "Hand-assembled in the Netherlands, this coffee maker brews at the optimal temperature for perfect coffee extraction.",
      features: ["Copper heating element", "9-hole water outlet", "Hotplate auto shut-off", "5-year warranty"],
      category: "Electrics"
    },
    {
      id: 302,
      name: "KitchenAid - Artisan Stand Mixer 5-Qt - Empire Red",
      image: "https://ext.same-assets.com/141635960/947296389.jpeg",
      price: 449.99,
      rating: 5,
      reviews: 342,
      brand: "KitchenAid",
      freeShipping: true,
      description: "Iconic stand mixer with 10 speeds and tilt-head design for easy bowl access.",
      features: ["10-speed control", "Planetary mixing action", "Pouring shield included", "Dishwasher-safe bowl"],
      category: "Electrics"
    },
    {
      id: 303,
      name: "Vitamix - A3500 Ascent Series Blender - Copper",
      image: "https://ext.same-assets.com/141635960/3641721154.jpeg",
      price: 599.95,
      rating: 5,
      reviews: 89,
      brand: "Vitamix",
      freeShipping: true,
      description: "Professional-grade blender with smart technology and wireless connectivity.",
      features: ["Variable speed control", "Pulse feature", "Self-cleaning", "10-year warranty"],
      category: "Electrics"
    },
    {
      id: 304,
      name: "Breville - Bambino Plus Espresso Machine - BES500BSS",
      image: "https://ext.same-assets.com/141635960/1589770752.jpeg",
      price: 349.95,
      rating: 4,
      reviews: 167,
      brand: "Breville",
      freeShipping: true,
      description: "Compact espresso machine with automatic milk texturing for café-quality coffee at home.",
      features: ["15-bar pressure pump", "Automatic milk texturing", "Fast heat-up time", "Compact design"],
      category: "Electrics"
    },
    {
      id: 305,
      name: "Cuisinart - 14-Cup Food Processor - DFP-14BCNY",
      image: "https://ext.same-assets.com/141635960/947296389.jpeg",
      price: 199.99,
      rating: 5,
      reviews: 234,
      brand: "Cuisinart",
      freeShipping: true,
      description: "Large capacity food processor with multiple discs and blades for versatile food prep.",
      features: ["14-cup work bowl", "Stainless steel blade", "Multiple discs included", "BPA-free"],
      category: "Electrics"
    },
    {
      id: 306,
      name: "All-Clad - Immersion Blender with Whisk Attachment",
      image: "https://ext.same-assets.com/141635960/3641721154.jpeg",
      price: 89.99,
      rating: 5,
      reviews: 78,
      brand: "All-Clad",
      freeShipping: false,
      description: "Professional immersion blender with variable speed control and whisk attachment.",
      features: ["Variable speed control", "Whisk attachment included", "Dishwasher safe parts", "Ergonomic grip"],
      category: "Electrics"
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
                    item.name === "Electrics" ? "text-green-700 font-semibold" : ""
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
          <span className="text-green-700 font-medium">Electrics</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Small Electrics</h1>
          <p className="text-lg text-gray-600">
            Professional kitchen appliances to enhance your culinary experience. From coffee makers
            to stand mixers, find the perfect electric appliances for your kitchen.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {electricsProducts.map((product) => (
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
