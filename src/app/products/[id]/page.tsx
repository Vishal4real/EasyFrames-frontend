"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Truck, RotateCcw, Check } from 'lucide-react';
import Link from 'next/link';

function ProductPage() {
    const params = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedFrame, setSelectedFrame] = useState('white');
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [isBuyingNow, setIsBuyingNow] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    const productImages = [
        'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=600&fit=crop'
    ];

    const frameOptions = [
        { id: 'white', label: 'White Frame', color: 'bg-white border-gray-300' },
        { id: 'black', label: 'Black Frame', color: 'bg-black' }
    ];

    const handleAddToCart = async () => {
        setIsAddingToCart(true);
        setTimeout(() => {
            setIsAddingToCart(false);
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 2000);
        }, 1000);
    };

    const handleBuyNow = async () => {
        setIsBuyingNow(true);
        setTimeout(() => {
            setIsBuyingNow(false);
            console.log('Redirecting to checkout...');
        }, 1000);
    };

    const toggleWishlist = () => {
        setIsInWishlist(!isInWishlist);
    };

    return (
        <div className='min-h-screen w-full bg-gray-50 mt-16'>

            {/* Back Navigation - Mobile Only */}
            <div className='sticky top-0 z-10 bg-white border-b border-gray-200 lg:hidden mt-16'>
                <div className='flex items-center justify-between px-4 py-3'>
                    <Link href="/">
                        <Button variant="ghost" size="sm" className='p-2'>
                            <ArrowLeft size={20} />
                        </Button>
                    </Link>
                    <span className='font-medium text-gray-900'>{params.id}</span>
                    <Button
                        variant="ghost"
                        size="sm"
                        className='p-2'
                    >
                        <Share2 size={20} />
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 lg:py-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6'>

                    {/* Product Images */}
                    <div className='flex flex-col gap-4'>
                        {/* Main Image */}
                        <div className='relative w-full  max-w-lg mx-auto '>
                            <Image
                                src={productImages[selectedImage]}
                                alt="Iron Man Portrait"
                                width={600}
                                height={600}
                                className="w-full h-120 object-cover rounded-xl shadow-lg bg-white"
                                priority
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className='flex gap-2 justify-center lg:justify-start overflow-x-auto pb-2 px-2 items-center mx-auto'>
                            {productImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === index
                                        ? 'border-blue-500 ring-2 ring-blue-200 scale-105'
                                        : 'border-gray-200 hover:border-gray-300 hover:scale-102'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`View ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Description */}
                        <div className='space-y-3 pt-4 border-t border-gray-400 p-2'>
                            <h3 className='font-semibold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent text-lg font-playfair'>Description</h3>
                            <p className='text-gray-600 leading-relaxed font-inter'>
                                Premium 300 GSM print with matte finish. Perfect for Marvel fans and collectors. 
                                5-7 day delivery, free prepaid shipping. Ideal for bedrooms, offices, and gaming rooms.
                            </p>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className='space-y-3 px-2 lg:px-0'>
                        {/* Brand & Title */}
                        <div>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm text-blue-600 font-medium tracking-wide uppercase'>Marvel</p>
                            </div>
                            <div className='flex justify-between items-center mt-1'>
                                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent leading-tight font-playfair'>
                                    Iron Man Portrait
                                </h1>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="p-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-300 hidden lg:flex"
                                ><Share2 size={16} /></Button>
                            </div>
                        </div>

                        <div className='border-t border-gray-200'></div>

                        {/* Combined Price, Features & Specifications Section */}
                        <div className='bg-gray-50 rounded-xl space-y-4 lg:space-y-6'>
                            {/* Price Section */}
                            <div>
                                <div className='flex items-center gap-2 sm:gap-3 flex-wrap'>
                                    <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900'>₹349</span>
                                    <span className='text-base mt-3 -ml-1 sm:text-lg text-gray-500 line-through'>₹399</span>
                                    <span className=' bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium'>
                                        Save ₹50
                                    </span>
                                    <span className=' text-green-600 text-sm font-medium font-inter'>✓ In Stock</span>
                                </div>
                            </div>

                            {/* Specifications */}
                            <div>
                                <h4 className='font-semibold text-gray-900 text-sm sm:text-base'>Product Details</h4>
                                <div className='bg-white rounded-lg p-3 lg:p-4 border border-gray-200 mt-2'>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 text-xs sm:text-sm'>
                                        <div className='flex justify-between items-center '>
                                            <span className='font-medium text-gray-700'>Size:</span>
                                            <span className='text-gray-900 font-medium'>10" × 12"</span>
                                        </div>
                                        <div className='flex justify-between items-center '>
                                            <span className='font-medium text-gray-700'>Material:</span>
                                            <span className='text-gray-900 font-medium'>Premium Print</span>
                                        </div>
                                        <div className='flex justify-between items-center '>
                                            <span className='font-medium text-gray-700'>Category:</span>
                                            <span className='text-blue-600 font-medium'>Marvel</span>
                                        </div>
                                        <div className='flex justify-between items-center '>
                                            <span className='font-medium text-gray-700'>SKU:</span>
                                            <span className='text-gray-900 font-medium'>IM-001</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Frame Color Selection */}
                        <div className='space-y-3'>
                            <h3 className='font-semibold text-gray-900 text-lg'>Frame Color</h3>
                            <div className='flex gap-4'>
                                {frameOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSelectedFrame(option.id)}
                                        className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-200 min-w-[120px] ${selectedFrame === option.id
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                            }`}
                                    >
                                        <div className={`w-6 h-6 rounded-full border-2 ${option.color} ${option.id === 'black' ? 'border-gray-300' : 'border-gray-400'}`} />
                                        <span className='text-sm font-medium text-gray-900'>
                                            {option.label}
                                        </span>
                                        {selectedFrame === option.id && (
                                            <Check size={16} className='text-blue-600 ml-auto' />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className='space-y-3'>
                            <h3 className='font-semibold text-gray-900 text-lg'>Quantity</h3>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center bg-white border border-gray-300 rounded-lg'>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        disabled={quantity <= 1}
                                        className='px-3 py-2 hover:bg-gray-50 disabled:opacity-50'
                                    >
                                        −
                                    </Button>
                                    <span className='px-4 py-2 min-w-[50px] text-center font-medium text-gray-900'>
                                        {quantity}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setQuantity(quantity + 1)}
                                        className='px-3 py-2 hover:bg-gray-50'
                                    >
                                        +
                                    </Button>
                                </div>
                                <span className='text-sm text-gray-600'>
                                    Available: <span className='font-semibold text-gray-900'>{quantity} selected</span>
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons - Hidden on mobile, shown on desktop */}
                        <div className='space-y-3 pt-2 hidden lg:block'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                <Button
                                    onClick={handleAddToCart}
                                    disabled={isAddingToCart || addedToCart}
                                    className='bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 font-medium py-3 h-12 transition-all duration-200'
                                    size="lg"
                                >
                                    {addedToCart ? (
                                        <span className='flex items-center gap-2'>
                                            <Check size={18} className='text-green-600' />
                                            Added to Cart
                                        </span>
                                    ) : isAddingToCart ? (
                                        'Adding...'
                                    ) : (
                                        'Add to Cart'
                                    )}
                                </Button>

                                <Button
                                    onClick={handleBuyNow}
                                    disabled={isBuyingNow}
                                    className='bg-black hover:bg-gray-800 text-white font-medium py-3 h-12 transition-all duration-200'
                                    size="lg"
                                >
                                    {isBuyingNow ? 'Processing...' : 'Buy Now'}
                                </Button>
                            </div>
                        </div>

                        <div className='bg-white rounded-xl p-4 lg:p-6 border border-gray-200 glow-border'>
                            {/* Product Features */}
                            <div>
                                <h4 className='font-semibold text-gray-900 text-sm sm:text-base'>What's Included</h4>
                                <div className='mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4'>
                                    <div className='flex items-center gap-2 text-xs sm:text-sm'>
                                        <div className='flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                                            <Truck size={14} className='text-green-600' />
                                        </div>
                                        <div>
                                            <span className='text-gray-900 font-medium block'>Free Shipping</span>
                                            <span className='text-gray-500 text-xs'>5-7 day delivery</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs sm:text-sm'>
                                        <div className='flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                                            <Truck size={14} className='text-blue-600' />
                                        </div>
                                        <div>
                                            <span className='text-gray-900 font-medium block'>Premium Quality</span>
                                            <span className='text-gray-500 text-xs'>300 GSM, matte finish</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs sm:text-sm'>
                                        <div className='flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center'>
                                            <RotateCcw size={14} className='text-gray-600' />
                                        </div>
                                        <div>
                                            <span className='text-gray-900 font-medium block'>No Returns*</span>
                                            <span className='text-gray-500 text-xs'>Custom orders</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile Bottom Bar */}
            <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-20'>
                <div className='flex gap-3'>
                    <Button
                        onClick={handleAddToCart}
                        disabled={isAddingToCart || addedToCart}
                        variant="outline"
                        className='flex-1 border-gray-900 text-gray-900 hover:bg-gray-50 h-12 font-medium'
                    >
                        {addedToCart ? (
                            <Check size={18} className='text-green-600' />
                        ) : isAddingToCart ? (
                            'Adding...'
                        ) : (
                            'Add to Cart'
                        )}
                    </Button>
                    <Button
                        onClick={handleBuyNow}
                        disabled={isBuyingNow}
                        className='flex-1 bg-black hover:bg-gray-800 text-white h-12 font-medium'
                    >
                        {isBuyingNow ? 'Processing...' : 'Buy Now'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;
