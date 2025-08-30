"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ArrowLeft, ShoppingCart as CartIcon, Truck, Shield, RotateCcw } from "lucide-react";
import { useCart, type Product } from "@/contexts/CartContext";
import { ShoppingCart } from "@/components/ShoppingCart";
import Link from "next/link";

// Sample product data - in a real app this would come from an API
const allProducts: Product[] = [
  {
    id: 1,
    name: "Ooni - Karu 2 Multi-Fuel Pizza Oven - UU-P25100",
    image: "https://ext.same-assets.com/141635960/947296389.jpeg",
    price: 494.97,
    rating: 5,
    reviews: 0,
    brand: "Ooni",
    freeShipping: true,
    description: "The Karu 2 is our most advanced portable pizza oven yet. Fire it with wood, charcoal, or gas (with optional gas burner) to cook authentic wood-fired pizza in just 60 seconds. Reaches temperatures up to 950°F (500°C) in just 15 minutes, making it perfect for outdoor entertaining and creating restaurant-quality pizzas at home.",
    features: [
      "Reaches 950°F (500°C) in just 15 minutes",
      "Cooks pizza in 60 seconds",
      "Portable design weighs only 26.5 lbs",
      "Multi-fuel capability - wood, charcoal, or gas",
      "Patented flame keeper technology",
      "Borosilicate glass door for heat retention",
      "Includes pizza peel and instruction guide"
    ],
    category: "Pizza Ovens"
  },
  {
    id: 2,
    name: "Emile Henry - 15.4\" x 9.4\" Ceramic Burgundy Baguette Baking Mold - 345500",
    image: "https://ext.same-assets.com/141635960/1589770752.jpeg",
    price: 177.77,
    rating: 4,
    reviews: 3,
    brand: "Emile Henry",
    freeShipping: true,
    description: "Create perfect baguettes at home with this professional-grade ceramic baking mold from Emile Henry. Made in France from high-fired Burgundy clay, this mold ensures even heat distribution and produces perfectly shaped baguettes with a crispy crust.",
    features: [
      "Professional ceramic construction",
      "Even heat distribution",
      "Easy release surface",
      "Dishwasher safe",
      "Made in France",
      "High-fired Burgundy clay",
      "Creates 4 baguettes at once"
    ],
    category: "Bakeware"
  },
  {
    id: 3,
    name: "All-Clad - 11\" HA1 Non-Stick Square Griddle - E6521364",
    image: "https://ext.same-assets.com/141635960/3641721154.jpeg",
    price: 79.99,
    rating: 5,
    reviews: 21,
    brand: "All-Clad",
    freeShipping: false,
    description: "Professional-grade non-stick griddle perfect for pancakes, grilled sandwiches, and more. The hard-anodized aluminum construction provides superior heat retention and even cooking.",
    features: [
      "PFOA-free non-stick coating",
      "Hard-anodized aluminum construction",
      "Dishwasher safe",
      "Compatible with all cooktops except induction",
      "Warp-resistant design",
      "Easy food release",
      "Professional grade"
    ],
    category: "Cookware"
  },
  // Add more products as needed...
];

export default function ProductPage() {
  const { addItem, setCartOpen } = useCart();
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productId = parseInt(params.id as string);
    const foundProduct = allProducts.find(p => p.id === productId);
    setProduct(foundProduct || null);
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product not found</h2>
          <Link href="/">
            <Button className="bg-green-700 hover:bg-green-800">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Sample additional images - in a real app these would come from the API
  const productImages = [
    product.image,
    product.image, // In a real app, these would be different angles
    product.image,
    product.image
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="https://ext.same-assets.com/141635960/1535866198.png"
                  alt="ChefNiche"
                  className="h-12 cursor-pointer"
                />
              </Link>
            </div>

            {/* Cart */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                My Account
              </Button>
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
          <Link href="/" className="hover:text-green-700">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index ? 'border-green-700' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Brand and Name */}
            <div>
              <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews} {product.reviews === 1 ? 'review' : 'reviews'})
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-sm text-green-700 font-semibold">Sale Price</div>
              <div className="text-4xl font-bold text-gray-900">${product.price}</div>
              {product.freeShipping && (
                <Badge className="bg-blue-100 text-blue-800">
                  🚚 Free Shipping
                </Badge>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full bg-green-700 hover:bg-green-800 text-white text-lg py-3"
              >
                <CartIcon className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product Features</h3>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="text-sm">{product.freeShipping ? 'Free Shipping' : 'Standard Shipping'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm">1 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-5 h-5 text-green-600" />
                  <span className="text-sm">30-Day Returns</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features List */}
            {product.features && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-700">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Link href={`/product/${relatedProduct.id}`}>
                      <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform p-4"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem] hover:text-green-700 cursor-pointer">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <div className="mt-2 text-lg font-bold text-gray-900">
                      ${relatedProduct.price}
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
