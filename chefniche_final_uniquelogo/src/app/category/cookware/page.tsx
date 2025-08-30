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

export default function CookwarePage() {
  const { addItem, setCartOpen } = useCart();
  const { addItem } = useCart();

  // Real cookware products from ChefNiche - expanded to 18 products
  const cookwareProducts: Product[] = [
    {
      id: 101,
      name: "All-Clad - 11\" HA1 Non-Stick Square Griddle - E6521364",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/e6521364-all-clad-11-ha1-non-stick-square-griddle_1.jpg",
      price: 79.99,
      rating: 5,
      reviews: 21,
      brand: "All-Clad",
      freeShipping: false,
      description: "Professional-grade non-stick griddle perfect for pancakes, grilled sandwiches, and more.",
      features: ["PFOA-free non-stick coating", "Hard-anodized aluminum construction", "Dishwasher safe", "Compatible with all cooktops"],
      category: "Cookware"
    },
    {
      id: 102,
      name: "Demeyere - Atlantis Proline 11\" Fry Pan with Helper Handle - 40850-938",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/40850-938-demeyere-atlantis-proline-11-fry-pan_1.jpg",
      price: 499.99,
      rating: 5,
      reviews: 28,
      brand: "Demeyere",
      freeShipping: true,
      description: "Premium Belgian stainless steel frying pan with superior heat distribution and helper handle.",
      features: ["7-layer construction", "ControlInduc technology", "Silvinox surface treatment", "Helper handle for easy lifting"],
      category: "Cookware"
    },
    {
      id: 103,
      name: "Crowd Cookware - 11.4\" Tasman Recycled Black Dutch Oven With Grill & BBQ Lid - 45105",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/45105-crowd-cookware-tasman-recycled-black-dutch-oven_1.jpg",
      price: 97.97,
      rating: 5,
      reviews: 0,
      brand: "Crowd Cookware",
      freeShipping: false,
      description: "Eco-friendly recycled aluminum Dutch oven with versatile grill and BBQ lid.",
      features: ["100% recycled aluminum", "Non-stick ceramic coating", "Grill and BBQ lid", "Oven safe to 400°F"],
      category: "Cookware"
    },
    {
      id: 104,
      name: "Hestan - 3 Qt ProBond Stainless Steel Covered Saucepan - 31565",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/31565-hestan-3-qt-probond-stainless-steel-covered-saucepan_1.jpg",
      price: 309.99,
      rating: 5,
      reviews: 10,
      brand: "Hestan",
      freeShipping: true,
      description: "Professional tri-ply stainless steel saucepan with superior heat distribution and covered lid.",
      features: ["Tri-ply construction", "Stainless steel interior", "Ergonomic handles", "Oven safe to 600°F"],
      category: "Cookware"
    },
    {
      id: 105,
      name: "Lodge - 12\" Cast Iron Skillet - L10SK3",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/l10sk3-lodge-12-cast-iron-skillet_1.jpg",
      price: 34.95,
      rating: 5,
      reviews: 245,
      brand: "Lodge",
      freeShipping: false,
      description: "Pre-seasoned cast iron skillet perfect for searing, frying, and baking. Made in USA.",
      features: ["Pre-seasoned finish", "Excellent heat retention", "Oven safe", "Made in USA"],
      category: "Cookware"
    },
    {
      id: 106,
      name: "Zwilling - 4-Qt Ceramic Non-Stick Dutch Oven",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/zwilling-ceramic-dutch-oven_1.jpg",
      price: 199.99,
      rating: 4,
      reviews: 56,
      brand: "Zwilling",
      freeShipping: true,
      description: "Beautiful ceramic non-stick Dutch oven for braising, roasting, and slow cooking.",
      features: ["Ceramic non-stick coating", "Heavy-gauge aluminum base", "Oven safe to 500°F", "Easy cleanup"],
      category: "Cookware"
    },
    {
      id: 107,
      name: "OXO - 3-Piece Mixing Bowl Set",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/oxo-mixing-bowl-set_1.jpg",
      price: 49.99,
      rating: 5,
      reviews: 134,
      brand: "OXO",
      freeShipping: false,
      description: "Non-slip mixing bowls with pour spouts and measurement markings for precise cooking.",
      features: ["Non-slip base", "Pour spouts", "Measurement markings", "Dishwasher safe"],
      category: "Cookware"
    },
    {
      id: 108,
      name: "Woll - 11\" Diamond Plus Induction Frying Pan",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/woll-diamond-plus-frying-pan_1.jpg",
      price: 124.99,
      rating: 5,
      reviews: 43,
      brand: "Woll",
      freeShipping: true,
      description: "German-engineered non-stick pan with diamond-reinforced coating for superior performance.",
      features: ["Diamond-reinforced coating", "Induction compatible", "PFOA-free", "Removable handle"],
      category: "Cookware"
    },
    {
      id: 109,
      name: "All-Clad - D3 Stainless Steel 3-Ply Bonded 12\" Fry Pan",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/all-clad-d3-fry-pan_1.jpg",
      price: 159.99,
      rating: 5,
      reviews: 87,
      brand: "All-Clad",
      freeShipping: true,
      description: "Professional tri-ply stainless steel frying pan with exceptional heat distribution.",
      features: ["Tri-ply stainless steel construction", "Dishwasher safe", "Oven safe to 600°F", "Compatible with all cooktops"],
      category: "Cookware"
    },
    {
      id: 110,
      name: "Le Creuset - 5.5 Qt Round Dutch Oven - Flame Orange",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/le-creuset-dutch-oven-flame-orange_1.jpg",
      price: 379.95,
      rating: 5,
      reviews: 156,
      brand: "Le Creuset",
      freeShipping: true,
      description: "Iconic enameled cast iron Dutch oven perfect for braising, baking, and slow cooking.",
      features: ["Enameled cast iron", "Superior heat retention", "Oven safe to 500°F", "Lifetime warranty"],
      category: "Cookware"
    },
    {
      id: 111,
      name: "Cuisinart - 11-Piece Cookware Set - Multiclad Pro",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/cuisinart-multiclad-pro-cookware-set_1.jpg",
      price: 299.99,
      rating: 4,
      reviews: 89,
      brand: "Cuisinart",
      freeShipping: true,
      description: "Complete stainless steel cookware set with tri-ply construction for professional results.",
      features: ["Tri-ply construction", "11-piece set", "Drip-free pouring", "Professional riveted handles"],
      category: "Cookware"
    },
    {
      id: 112,
      name: "Swiss Diamond - 11\" Non-Stick Fry Pan with Lid",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/swiss-diamond-fry-pan-with-lid_1.jpg",
      price: 189.99,
      rating: 5,
      reviews: 67,
      brand: "Swiss Diamond",
      freeShipping: true,
      description: "Swiss-engineered non-stick frying pan with real diamond crystals in the coating.",
      features: ["Diamond-reinforced coating", "PFOA-free", "Oven safe to 500°F", "Heat-tempered glass lid"],
      category: "Cookware"
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
      {/* Top Bar - Exact match to homepage */}
      <div className="bg-green-700 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span>FREE SHIPPING* over $149</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>888-367-0670</span>
            </div>
            <span>Expert Help</span>
          </div>
        </div>
      </div>

      {/* Header - Exact match to homepage */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/assets/chefniche-logo.svg"
                alt="ChefNiche"
                className="h-10"
              />
            </Link>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search 40,000+ products..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300"
                />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/account" className="text-gray-700 hover:text-green-700">My Account</Link>
              <ShoppingCart />
            </div>
          </div>
        </div>

        {/* Navigation - Exact match to homepage */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-8 py-3">
              <div className="flex items-center space-x-2 text-gray-700">
                <Menu className="w-4 h-4" />
                <Link href="/" className="hover:text-green-700">All Categories</Link>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-green-700 transition-colors ${
                    item.name === "Cookware" ? "text-green-700 font-semibold" : ""
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
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <span className="text-green-700 font-medium">Cookware</span>
        </div>

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookware</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional-grade cookware for home chefs. From non-stick pans to cast iron skillets,
            find the perfect cookware for your kitchen.
          </p>
          <div className="mt-4 text-gray-600">
            {cookwareProducts.length} Products • Free Shipping on Orders $149+
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cookwareProducts.map((product) => (
            <Card key={product.id} className="border border-gray-200 hover:shadow-md transition-shadow">
              <div className="aspect-square relative bg-white p-4">
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </Link>
                {product.freeShipping && (
                  <Badge className="absolute top-2 right-2 bg-blue-600 text-white text-xs">
                    Free Shipping
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-green-700 border-green-700 text-xs">
                    {product.brand}
                  </Badge>
                </div>

                <Link href={`/product/${product.id}`}>
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 hover:text-green-700">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                </div>

                <div className="mb-3">
                  <div className="text-green-700 font-semibold text-sm">Sale Price</div>
                  <div className="text-xl font-bold text-gray-900">${product.price}</div>
                </div>

                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-2 text-sm font-semibold"
                >
                  ADD TO CART
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer - Exact match to homepage */}
      <footer className="bg-green-700 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <img
              src="/assets/chefniche-logo.svg"
              alt="ChefNiche"
              className="h-12 mx-auto brightness-0 invert"
            />
          </div>

          <div className="flex justify-center space-x-12 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 font-bold">✓</span>
              </div>
              <div className="text-left">
                <div className="font-bold">FREE SHIPPING*</div>
                <div className="text-sm">Over $149</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-green-700" />
              </div>
              <div className="text-left">
                <div className="font-bold">4.8 STARS</div>
                <div className="text-sm">700 reviews</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 font-bold">$</span>
              </div>
              <div className="text-left">
                <div className="font-bold">PRICE MATCH</div>
                <div className="text-sm">Yes, just ask!</div>
              </div>
            </div>
          </div>

          <div className="text-sm">
            © 2025 ChefNiche Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
