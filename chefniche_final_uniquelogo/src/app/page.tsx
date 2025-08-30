"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, Star, Menu, ShoppingCart as CartIcon } from "lucide-react";
import { useCart, type Product } from "@/contexts/CartContext";
import { ShoppingCart } from "@/components/ShoppingCart";
import Link from "next/link";

export default function Home() {
  const { addItem, setCartOpen } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { addItem } = useCart();

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: "Cookware", href: "/category/cookware" },
    { name: "Knives & Cutlery", href: "/category/knives" },
    { name: "Electrics", href: "/category/electrics" },
    { name: "Bakeware", href: "/category/bakeware" },
    { name: "Tabletop", href: "/category/tabletop" }
  ];

  const brandLogos = [
    { name: "Zwilling", logo: "https://ext.same-assets.com/141635960/2520718634.png" },
    { name: "All-Clad", logo: "https://ext.same-assets.com/141635960/3726152501.png" },
    { name: "Jura", logo: "https://ext.same-assets.com/141635960/1989390234.png" },
    { name: "Global", logo: "https://ext.same-assets.com/141635960/907495674.png" },
    { name: "OXO", logo: "https://ext.same-assets.com/141635960/634571573.png" },
    { name: "ChefsChoice", logo: "https://ext.same-assets.com/141635960/3884477569.png" },
    { name: "Woll", logo: "https://ext.same-assets.com/141635960/3673402789.png" },
    { name: "Lodge", logo: "https://ext.same-assets.com/141635960/3956952457.png" }
  ];

  const hotNewBrands = [
    { name: "True", logo: "https://ext.same-assets.com/141635960/1525595237.png" },
    { name: "Hurom", logo: "https://ext.same-assets.com/141635960/197820656.png" },
    { name: "Hamix", logo: "https://ext.same-assets.com/141635960/610101695.png" },
    { name: "Koolaire", logo: "https://ext.same-assets.com/141635960/949989310.png" },
    { name: "Manitowoc", logo: "https://ext.same-assets.com/141635960/3534748317.png" },
    { name: "Wolf", logo: "https://ext.same-assets.com/141635960/2127784157.png" },
    { name: "Victorinox", logo: "https://ext.same-assets.com/141635960/2757949.png" },
    { name: "Randell", logo: "https://ext.same-assets.com/141635960/667018892.png" }
  ];

  // Real products from ChefNiche matching original layout
  const homeProducts: Product[] = [
    {
      id: 1,
      name: "Ooni - Karu 2 Multi-Fuel Pizza Oven - UU-P25100",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/uu-p25100-ooni-karu-2-multi-fuel-pizza-oven_1.jpg",
      price: 494.97,
      rating: 5,
      reviews: 0,
      brand: "Ooni",
      freeShipping: true,
      description: "The Karu 2 is our most advanced portable pizza oven yet.",
      features: ["Reaches 950°F in 15 minutes", "Cooks pizza in 60 seconds", "Multi-fuel capability"],
      category: "Pizza Ovens"
    },
    {
      id: 2,
      name: "Emile Henry - 15.4\" x 9.4\" Ceramic Burgundy Baguette Baking Mold - 345500",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/345500-emile-henry-ceramic-burgundy-baguette-baking-mold_1.jpg",
      price: 177.77,
      rating: 4,
      reviews: 3,
      brand: "Emile Henry",
      freeShipping: true,
      description: "Create perfect baguettes at home with this professional-grade ceramic baking mold.",
      features: ["Professional ceramic construction", "Even heat distribution"],
      category: "Bakeware"
    },
    {
      id: 3,
      name: "All-Clad - 11\" HA1 Non-Stick Square Griddle - E6521364",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/e6521364-all-clad-11-ha1-non-stick-square-griddle_1.jpg",
      price: 79.99,
      rating: 5,
      reviews: 21,
      brand: "All-Clad",
      freeShipping: false,
      description: "Professional-grade non-stick griddle perfect for pancakes and grilled sandwiches.",
      features: ["PFOA-free non-stick coating", "Hard-anodized aluminum"],
      category: "Cookware"
    },
    {
      id: 4,
      name: "Technivorm - Moccamaster KBG Select 40 Oz Black Coffee Maker with Glass Carafe - 53922",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/53922-technivorm-moccamaster-kbg-select-black-coffee-maker_1.jpg",
      price: 479.99,
      rating: 5,
      reviews: 28,
      brand: "Technivorm",
      freeShipping: true,
      description: "Hand-assembled in the Netherlands, brews at optimal temperature.",
      features: ["Copper heating element", "5-year warranty"],
      category: "Electrics"
    },
    {
      id: 5,
      name: "Ember - Mug² 12 Oz Black Smart Temperature Travel Mug - TM231000CA",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/tm231000ca-ember-mug2-black-smart-temperature-travel-mug_1.jpg",
      price: 224.97,
      rating: 4,
      reviews: 0,
      brand: "Ember",
      freeShipping: true,
      description: "Smart temperature control mug that keeps beverages at perfect temperature.",
      features: ["Smart temperature control", "12-hour battery"],
      category: "Electrics"
    },
    {
      id: 6,
      name: "Global - 2 PC Knife Set Chef Knife (G2) & Kitchen Knife (GS11) - G201",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/g201-global-2-pc-knife-set-chef-knife-g2-kitchen-knife-gs11_1.jpg",
      price: 198.80,
      rating: 5,
      reviews: 0,
      brand: "Global",
      freeShipping: true,
      description: "Professional Japanese knife set featuring ultra-sharp blades.",
      features: ["Ice-tempered stainless steel", "Seamless construction"],
      category: "Knives & Cutlery"
    }
  ];

  // Business products
  const businessProducts: Product[] = [
    {
      id: 10,
      name: "Lamber - Deluxe High-Temperature Undercounter Dishwasher - DSP4DPS",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/dsp4dps-lamber-deluxe-high-temperature-undercounter-dishwasher_1.jpg",
      price: 5239.99,
      rating: 5,
      reviews: 0,
      brand: "Lamber",
      freeShipping: true,
      description: "Professional undercounter dishwasher for commercial kitchens.",
      features: ["High-temperature wash", "Energy efficient"],
      category: "Commercial Equipment"
    },
    {
      id: 11,
      name: "Kool-It - 52\" Swing Glass Door Merchandise Refrigerator - KGM-52 (Dry Storage)",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/kgm-52-kool-it-52-swing-glass-door-merchandise-refrigerator_1.jpg",
      price: 3224.99,
      rating: 4,
      reviews: 0,
      brand: "Kool-It",
      freeShipping: true,
      description: "Large capacity commercial refrigerator with swing glass doors.",
      features: ["52\" width", "Glass swing doors"],
      category: "Commercial Refrigeration"
    },
    {
      id: 12,
      name: "Eurodib - 19 L Commercial Spiral Mixer (20 QT) - LM20T ETL",
      image: "https://cdn.shopify.com/s/files/1/0018/6816/1933/products/lm20t-etl-eurodib-19l-commercial-spiral-mixer_1.jpg",
      price: 1459.99,
      rating: 5,
      reviews: 0,
      brand: "Eurodib",
      freeShipping: true,
      description: "Heavy-duty commercial spiral mixer for bakeries and restaurants.",
      features: ["20 QT capacity", "ETL certified"],
      category: "Commercial Mixers"
    }
  ];

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar - Exact match to original */}
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

      {/* Header - Exact match to original */}
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

        {/* Navigation - Exact match to original */}
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
                  className="text-gray-700 hover:text-green-700 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Discount Modal - Exact match to original */}
      {mounted && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4">
                <img
                  src="/assets/chefniche-logo.svg"
                  alt="ChefNiche"
                  className="h-8 mx-auto"
                />
              </div>
              <DialogTitle className="text-3xl font-bold text-gray-900">$10 OFF</DialogTitle>
              <DialogDescription className="text-lg font-semibold text-gray-700">
                Limited Time Offer
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-center text-gray-600">
                Join us for sizzling savings, new products, priority support, and the finest selection of kitchenware.
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full text-center"
                />
                <Button
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3"
                  onClick={() => setShowModal(false)}
                >
                  CLAIM OFFER
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Brand Logos Section - Exact match to original */}
        <section className="mb-12">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center mb-8">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="flex justify-center p-3">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/brands">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 font-semibold">
                SHOP ALL BRANDS
              </Button>
            </Link>
          </div>
        </section>

        {/* Hot New Brands */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">Hot New Brands</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center mb-8">
            {hotNewBrands.map((brand) => (
              <div key={brand.name} className="flex justify-center p-3">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/brands">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 font-semibold">
                SHOP ALL BRANDS
              </Button>
            </Link>
          </div>
        </section>

        {/* For The Home Section - Exact match to original */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-center mb-8 text-gray-700">For The Home</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeProducts.map((product) => (
              <Card key={product.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-square relative bg-white p-4">
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </div>
                <CardContent className="p-4">
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
                    <span className="text-sm text-gray-600 ml-1">{product.reviews} Reviews</span>
                  </div>

                  <div className="mb-3">
                    <div className="text-green-700 font-semibold text-sm">Sale Price</div>
                    <div className="text-xl font-bold text-gray-900">${product.price}</div>
                    {product.freeShipping && (
                      <Badge variant="outline" className="text-blue-600 border-blue-600 mt-1 text-xs">
                        🚚 Free Shipping
                      </Badge>
                    )}
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
        </section>

        {/* For Business Section - Exact match to original */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-center mb-8 text-gray-700">For Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessProducts.map((product) => (
              <Card key={product.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-square relative bg-white p-4">
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </div>
                <CardContent className="p-4">
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
                    <span className="text-sm text-gray-600 ml-1">{product.reviews} Reviews</span>
                  </div>

                  <div className="mb-3">
                    <div className="text-green-700 font-semibold text-sm">Sale Price</div>
                    <div className="text-xl font-bold text-gray-900">${product.price.toLocaleString()}</div>
                    {product.freeShipping && (
                      <Badge variant="outline" className="text-blue-600 border-blue-600 mt-1 text-xs">
                        🚚 Free Shipping
                      </Badge>
                    )}
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
        </section>

        {/* Newsletter Signup - Exact match to original */}
        <section className="bg-gray-50 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-700 text-white px-3 py-1 font-semibold">
                $10 DISCOUNT
              </Badge>
              <span className="font-semibold text-gray-900">SAVE $10 OFF YOUR FIRST ORDER</span>
            </div>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email - save $10 today"
                className="w-64"
              />
              <Button className="bg-green-700 hover:bg-green-800 text-white px-6 font-semibold">
                SUBMIT
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Exact match to original */}
      <footer className="bg-green-700 text-white py-8">
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
