"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Phone, Menu } from "lucide-react";
import { ShoppingCart } from "@/components/ShoppingCart";
import Link from "next/link";

export default function BrandsPage() {
  const allBrands = [
    {
      name: "Zwilling",
      logo: "https://ext.same-assets.com/141635960/815511873.png",
      description: "German engineering meets culinary innovation. Zwilling has been crafting premium knives and cookware since 1731.",
      category: "Knives & Cookware",
      featured: true
    },
    {
      name: "All-Clad",
      logo: "https://ext.same-assets.com/141635960/3928379540.png",
      description: "American-made tri-ply stainless steel cookware trusted by professional chefs worldwide.",
      category: "Cookware",
      featured: true
    },
    {
      name: "Global",
      logo: "https://ext.same-assets.com/141635960/667018892.png",
      description: "Japanese precision and artistry in every knife. Global revolutionized kitchen cutlery design.",
      category: "Knives & Cutlery",
      featured: true
    },
    {
      name: "Lodge",
      logo: "https://ext.same-assets.com/141635960/3123364184.png",
      description: "America's original cookware company, crafting cast iron since 1896. Made in the USA.",
      category: "Cookware",
      featured: true
    },
    {
      name: "Woll",
      logo: "https://ext.same-assets.com/141635960/3620807762.png",
      description: "German non-stick technology with diamond-reinforced coating for superior performance.",
      category: "Cookware",
      featured: true
    },
    {
      name: "OXO",
      logo: "https://ext.same-assets.com/141635960/3119363711.png",
      description: "Smart design that makes cooking easier. Innovative tools for every kitchen task.",
      category: "Kitchen Tools",
      featured: true
    },
    {
      name: "KitchenAid",
      logo: "https://ext.same-assets.com/141635960/1149018373.png",
      description: "Iconic stand mixers and small appliances that inspire culinary creativity since 1919.",
      category: "Small Electrics",
      featured: true
    },
    {
      name: "Emile Henry",
      logo: "https://ext.same-assets.com/141635960/303230690.png",
      description: "French ceramic cookware and bakeware, handcrafted in Burgundy since 1850.",
      category: "Bakeware & Ceramic",
      featured: true
    },
    {
      name: "True",
      logo: "https://ext.same-assets.com/141635960/76997178.png",
      description: "Commercial refrigeration excellence for professional kitchens and serious home cooks.",
      category: "Refrigeration",
      featured: false
    },
    {
      name: "Hurom",
      logo: "https://ext.same-assets.com/141635960/197820656.png",
      description: "Slow juicing technology that preserves nutrients and natural flavors in every glass.",
      category: "Small Electrics",
      featured: false
    },
    {
      name: "Victorinox",
      logo: "https://ext.same-assets.com/141635960/610101695.png",
      description: "Swiss precision in professional kitchen knives, trusted by chefs around the world.",
      category: "Knives & Cutlery",
      featured: false
    },
    {
      name: "Wolf",
      logo: "https://ext.same-assets.com/141635960/3381567604.png",
      description: "Luxury kitchen appliances that deliver professional performance for the home chef.",
      category: "Appliances",
      featured: false
    }
  ];

  const navItems = [
    { name: "Cookware", href: "/category/cookware" },
    { name: "Knives & Cutlery", href: "/category/knives" },
    { name: "Electrics", href: "/category/electrics" },
    { name: "Bakeware", href: "/category/bakeware" },
    { name: "Tabletop", href: "/category/tabletop" }
  ];

  const featuredBrands = allBrands.filter(brand => brand.featured);
  const hotNewBrands = allBrands.filter(brand => !brand.featured);

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
                  className="text-gray-700 hover:text-green-700 font-medium"
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
          <span className="text-green-700 font-medium">Brands</span>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Brands</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the world's finest kitchen brands at ChefNiche. From legendary knife makers
            to innovative appliance manufacturers, we partner with brands that share our commitment to quality and performance.
          </p>
        </div>

        {/* Featured Brands Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBrands.map((brand) => (
              <Card key={brand.name} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{brand.name}</h3>
                  <p className="text-sm text-green-700 font-medium mb-3">{brand.category}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{brand.description}</p>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                  >
                    Shop {brand.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hot New Brands Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hot New Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotNewBrands.map((brand) => (
              <Card key={brand.name} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{brand.name}</h3>
                  <p className="text-sm text-green-700 font-medium mb-3">{brand.category}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{brand.description}</p>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                  >
                    Shop {brand.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why These Brands Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why We Choose These Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                Every brand we carry meets our strict quality standards for durability, performance, and craftsmanship.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We partner with brands that push the boundaries of kitchen technology and design innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">T</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Trust</h3>
              <p className="text-gray-600">
                These brands have earned the trust of professional chefs and home cooks around the world.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-12">
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
                <span className="text-green-700 text-xl">★</span>
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
