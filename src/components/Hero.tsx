import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight, Star, Shield, Truck, Heart } from 'lucide-react'
import { InfiniteGrid } from './ui/the-infinite-grid'

export default function Hero() {
    return (
        <InfiniteGrid className='min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden'>
            <div className='relative z-10 container mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8 py-18 lg:py-28'>
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
                    <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left space-y-8'>
                        {/* Main Heading with Stylish Font */}
                        <div className="">
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight font-playfair'>
                                <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                                    Premium Frames
                                </span>
                            </h1>
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight font-playfair'>
                                for Your Favorite Art
                            </h1>
                            {/* <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight font-playfair'>
                                <span className="bg-gradient-to-r from-blue-900 to-gray-900 bg-clip-text text-transparent">
                                    Favorite Art
                                </span>
                            </h1> */}
                        </div>

                        {/* Subtitle */}
                        <div className='text-base lg:text-base text-gray-600 dark:text-gray-400 max-w-2xl font-inter'>
                            <p>
                                Transform your space with our curated collection of high-quality frames.
                            </p>
                            <p>
                                Perfect for <span className="font-semibold text-lg text-gray-900 dark:text-white ">Marvel, Anime, Home Decor</span> and more.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 -mt-6">
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700">
                                    <Shield className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 font-inter">Premium Quality</span>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700">
                                    <Truck className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 font-inter">Fast Shipping</span>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700">
                                    <Heart className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 font-inter">Loved by 10K+</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                            <Button size="lg" className='bg-slate-900 hover:bg-blue-900 text-white rounded-full px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 font-inter'>
                                Shop Collection
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-gray-300 dark:border-gray-600 hover:border-slate-900 dark:hover:border-white rounded-full px-8 py-4 text-base font-semibold bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 font-inter"
                            >
                                View All Frames
                            </Button>
                        </div>
                    </div>

                    {/* Enhanced Image Grid */}
                    <div className='w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0'>
                        <div className="relative max-w-lg w-full">
                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                <div className="space-y-4 lg:space-y-6">
                                    <div className="relative group">
                                        <Image
                                            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=300"
                                            alt="Modern Frame Collection"
                                            width={300}
                                            height={300}
                                            className="w-full aspect-square object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transform group-hover:scale-105 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-900 dark:text-white font-inter">
                                            Modern
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <Image
                                            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300"
                                            alt="Classic Frame Collection"
                                            width={300}
                                            height={300}
                                            className="w-full aspect-square object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transform group-hover:scale-105 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-900 dark:text-white font-inter">
                                            Classic
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-12">
                                    <div className="relative group">
                                        <Image
                                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300"
                                            alt="Premium Frame Collection"
                                            width={300}
                                            height={300}
                                            className="w-full aspect-square object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transform group-hover:scale-105 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-medium font-inter">
                                            Premium
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <Image
                                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300"
                                            alt="Rustic Frame Collection"
                                            width={300}
                                            height={300}
                                            className="w-full aspect-square object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transform group-hover:scale-105 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-900 dark:text-white font-inter">
                                            Rustic
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 font-inter">In Stock</span>
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-inter">500+ Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fade-out gradient at bottom for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-48 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50 dark:via-gray-900/50 dark:to-gray-900 pointer-events-none z-20"></div>
        </InfiniteGrid>
    )
}