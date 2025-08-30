"use client";

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart as CartIcon, Plus, Minus, Trash2, X } from "lucide-react";
import Link from "next/link";

export function ShoppingCart() {
  const { state, removeItem, updateQuantity, toggleCart, setCartOpen, isLoaded } = useCart();

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  // Don't render cart count until loaded to prevent hydration mismatch
  const displayItemCount = isLoaded ? state.itemCount : 0;

  return (
    <Sheet open={state.isOpen} onOpenChange={setCartOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2 relative">
          <CartIcon className="w-5 h-5" />
          {isLoaded && displayItemCount > 0 && (
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-2 bg-green-700 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs p-0"
            >
              {displayItemCount}
            </Badge>
          )}
          <span className="hidden md:inline">My Cart</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Shopping Cart ({isLoaded ? state.itemCount : 0})</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCartOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </SheetTitle>
          <SheetDescription>
            Review your items and proceed to checkout
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-auto py-4">
            {!isLoaded ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700 mb-4"></div>
                <p className="text-gray-500">Loading cart...</p>
              </div>
            ) : state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <CartIcon className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-500 mb-2">Your cart is empty</h3>
                <p className="text-gray-400 mb-4">Add some products to get started!</p>
                <Button
                  onClick={() => setCartOpen(false)}
                  className="bg-green-700 hover:bg-green-800"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500 mb-2">{item.brand}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>

                            <span className="font-medium w-8 text-center">{item.quantity}</span>

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="mt-2 flex justify-between items-center">
                          <div className="text-sm">
                            <span className="font-semibold text-green-700">
                              {formatPrice((item.salePrice || item.price) * item.quantity)}
                            </span>
                            {item.quantity > 1 && (
                              <span className="text-gray-500 ml-1">
                                ({formatPrice(item.salePrice || item.price)} each)
                              </span>
                            )}
                          </div>
                          {item.freeShipping && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                              🚚 Free Shipping
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {isLoaded && state.items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-base">
                  <span>Subtotal:</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping:</span>
                  <span>{state.total >= 149 ? "FREE" : "Calculated at checkout"}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-green-700">{formatPrice(state.total)}</span>
                </div>
                {state.total < 149 && (
                  <p className="text-sm text-gray-600">
                    Add {formatPrice(149 - state.total)} more for free shipping!
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Link href="/checkout" onClick={() => setCartOpen(false)}>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
