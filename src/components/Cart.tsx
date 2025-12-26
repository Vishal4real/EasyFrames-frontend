import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, Package, Heart } from "lucide-react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

interface CartItem {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    quantity: number;
    category: string;
}

interface CartProps {
    variant?: "icon" | "button"
}

export function Cart({ variant = "icon" }: CartProps) {
    // Mock cart data - replace with your actual cart state
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Classic Frames",
            price: 249,
            originalPrice: 349,
            image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400",
            quantity: 2,
            category: "Classic"
        },
        {
            id: 2,
            name: "Modern Collection",
            price: 299,
            originalPrice: 399,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600",
            quantity: 1,
            category: "Modern"
        }
    ]);

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
        } else {
            setCartItems(cartItems.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalSavings = cartItems.reduce((sum, item) => 
        sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0
    );

    const renderEmptyCart = () => (
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-blue-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <ShoppingCart size={32} className="text-slate-600 dark:text-slate-400" />
            </div>
            <h3 className="font-playfair text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2">
                Your Cart is Empty
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Discover our premium frame collection and find the perfect frames for your space
            </p>
            <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <Package className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <span className="font-inter text-xs text-gray-600 dark:text-gray-400">Premium Quality</span>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <Heart className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <span className="font-inter text-xs text-gray-600 dark:text-gray-400">Loved by 10K+</span>
                </div>
            </div>
        </div>
    );

    const renderCartItem = (item: CartItem) => (
        <div key={item.id} className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex gap-4">
                {/* Product Image */}
                <div className="relative flex-shrink-0">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-xl border border-gray-200 dark:border-gray-600"
                    />
                    <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5">
                        {item.category}
                    </Badge>
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-inter font-semibold text-slate-900 dark:text-white text-sm leading-tight line-clamp-2">
                            {item.name}
                        </h4>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="font-inter font-bold text-slate-900 dark:text-white text-sm">
                            ₹{item.price}
                        </span>
                        {item.originalPrice && (
                            <span className="font-inter text-gray-500 dark:text-gray-400 text-xs line-through">
                                ₹{item.originalPrice}
                            </span>
                        )}
                        {item.originalPrice && (
                            <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs px-2 py-0.5">
                                Save ₹{item.originalPrice - item.price}
                            </Badge>
                        )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                            >
                                <Minus size={12} />
                            </button>
                            <span className="font-inter font-medium text-slate-900 dark:text-white px-3 text-sm">
                                {item.quantity}
                            </span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                            >
                                <Plus size={12} />
                            </button>
                        </div>
                        <span className="font-inter font-bold text-slate-900 dark:text-white text-sm">
                            ₹{item.price * item.quantity}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Sheet>
            <SheetTrigger asChild>
                {variant === "icon" ? (
                    <button className="relative p-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105">
                        <ShoppingCart size={18} className="text-slate-900 dark:text-white" />
                        {totalItems > 0 && (
                            <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                                {totalItems > 9 ? '9+' : totalItems}
                            </Badge>
                        )}
                    </button>
                ) : (
                    <button className="relative flex-1 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:scale-105">
                        <ShoppingCart size={18} className="text-slate-900 dark:text-white" />
                        <span className="font-inter font-medium text-slate-900 dark:text-white">Cart</span>
                        {totalItems > 0 && (
                            <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5">
                                {totalItems}
                            </Badge>
                        )}
                    </button>
                )}
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-md bg-white dark:bg-gray-900 border-l border-gray-300 dark:border-gray-700 flex flex-col">
                <SheetHeader className="pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <SheetTitle className="font-playfair text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                                Shopping Cart
                            </SheetTitle>
                            <SheetDescription className="font-inter text-gray-600 dark:text-gray-400">
                                {cartItems.length > 0 
                                    ? `${totalItems} item${totalItems > 1 ? 's' : ''} in your cart`
                                    : 'Review your items before checkout'
                                }
                            </SheetDescription>
                        </div>
                    </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6">
                    {cartItems.length > 0 ? (
                        <div className="space-y-4">
                            {cartItems.map(renderCartItem)}
                        </div>
                    ) : (
                        renderEmptyCart()
                    )}
                </div>

                <SheetFooter className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
                    {cartItems.length > 0 ? (
                        <div className="space-y-4 w-full">
                            {/* Order Summary */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                                <div className="space-y-2">
                                    <div className="flex justify-between font-inter text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Subtotal ({totalItems} items)</span>
                                        <span className="text-slate-900 dark:text-white">₹{totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between font-inter text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                                        <span className="text-blue-600 dark:text-blue-400 font-medium">Free</span>
                                    </div>
                                    {totalSavings > 0 && (
                                        <div className="flex justify-between font-inter text-sm">
                                            <span className="text-gray-600 dark:text-gray-400">You Save</span>
                                            <span className="text-blue-600 dark:text-blue-400 font-medium">₹{totalSavings}</span>
                                        </div>
                                    )}
                                    <Separator className="my-2 bg-gray-300 dark:bg-gray-600" />
                                    <div className="flex justify-between font-inter font-bold">
                                        <span className="text-slate-900 dark:text-white">Total</span>
                                        <span className="text-slate-900 dark:text-white">₹{totalPrice}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <Button 
                                    className="font-inter w-full h-12 bg-slate-900 hover:bg-blue-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                                >
                                    Proceed to Checkout
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                
                                <SheetClose asChild>
                                    <Button 
                                        variant="outline" 
                                        className="font-inter w-full h-12 border-2 border-gray-400 dark:border-gray-500 hover:border-slate-900 dark:hover:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]"
                                    >
                                        Continue Shopping
                                    </Button>
                                </SheetClose>
                            </div>
                        </div>
                    ) : (
                        <SheetClose asChild>
                            <Button 
                                className="font-inter w-full h-12 bg-slate-900 hover:bg-blue-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                            >
                                Start Shopping
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </SheetClose>
                    )}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
