"use client"

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import EditorialSection from '@/components/EditorialSection'
import { Button } from '@/components/ui/button'

// Mock category data - replace with actual API call
const categoryData: Record<string, { name: string; description: string; image: string; products: any[] }> = {
    'bedroom': {
        name: 'Bedroom',
        description: 'Curated frames for bedrooms, perfect for 2BHK living spaces',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop',
        products: [
            {
                id: 'bedroom-1',
                name: "Bedroom Gallery Wall",
                price: 299,
                originalPrice: 399,
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
                hoverImage: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=600&fit=crop",
                category: "Bedroom",
                badge: "Best Seller" as const,
                size: "12\" × 16\""
            },
            {
                id: 'bedroom-2',
                name: "Minimal Bedroom Frames",
                price: 249,
                originalPrice: 329,
                image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=600&fit=crop",
                hoverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
                category: "Bedroom",
                badge: undefined,
                size: "10\" × 12\""
            },
            {
                id: 'bedroom-3',
                name: "Cozy Bedroom Collection",
                price: 349,
                originalPrice: 449,
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
                hoverImage: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&h=600&fit=crop",
                category: "Bedroom",
                badge: "New" as const,
                size: "14\" × 18\""
            },
        ]
    },
    'office': {
        name: 'Office',
        description: 'Professional workspace frames for offices and studios',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop',
        products: [
            {
                id: 'office-1',
                name: "Office Inspiration Frames",
                price: 349,
                originalPrice: 449,
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
                hoverImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
                category: "Office",
                badge: undefined,
                size: "10\" × 12\""
            },
        ]
    },
}

export default function CategoryPage() {
    const params = useParams()
    const categoryId = params.id as string
    const category = categoryData[categoryId] || categoryData['bedroom']
    
    const [selectedTheme, setSelectedTheme] = useState<string>('all')
    const [selectedSize, setSelectedSize] = useState<string>('all')
    const [priceRange, setPriceRange] = useState<number[]>([0, 1000])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
            {/* Visual Banner */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
                        {category.name} Frames
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl font-inter">
                        {category.description}
                    </p>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar - Desktop */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-6 sticky top-24">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-inter">Filters</h3>
                            
                            {/* Theme Filter */}
                            <div>
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block font-inter">Theme</label>
                                <div className="space-y-2">
                                    {['all', 'minimal', 'bold', 'vintage'].map((theme) => (
                                        <button
                                            key={theme}
                                            onClick={() => setSelectedTheme(theme)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors font-inter ${
                                                selectedTheme === theme
                                                    ? 'bg-blue-900 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                            }`}
                                        >
                                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div>
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block font-inter">Size</label>
                                <div className="space-y-2">
                                    {['all', '8x10', '10x12', '12x16', '16x20'].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors font-inter ${
                                                selectedSize === size
                                                    ? 'bg-blue-900 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                            }`}
                                        >
                                            {size === 'all' ? 'All Sizes' : `${size.replace('x', '" × ')}"`}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block font-inter">Price</label>
                                <div className="space-y-2">
                                    {[
                                        { label: 'All Prices', range: [0, 1000] },
                                        { label: 'Under ₹300', range: [0, 300] },
                                        { label: '₹300 - ₹500', range: [300, 500] },
                                        { label: 'Above ₹500', range: [500, 1000] },
                                    ].map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setPriceRange(option.range)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors font-inter ${
                                                priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                                                    ? 'bg-blue-900 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full border-gray-300 dark:border-gray-600 font-inter"
                                onClick={() => {
                                    setSelectedTheme('all')
                                    setSelectedSize('all')
                                    setPriceRange([0, 1000])
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Filters Bar - Mobile */}
                        <div className="lg:hidden mb-6">
                            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {['all', 'minimal', 'bold', 'vintage'].map((theme) => (
                                        <button
                                            key={theme}
                                            onClick={() => setSelectedTheme(theme)}
                                            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors font-inter ${
                                                selectedTheme === theme
                                                    ? 'bg-blue-900 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                            }`}
                                        >
                                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Product Grid - Calm, structured */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {category.products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    image={product.image}
                                    hoverImage={product.hoverImage}
                                    badge={product.badge}
                                    size={product.size}
                                    category={product.category}
                                    href={`/products/${product.id}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Editorial Section */}
            <section className="mt-16">
                <EditorialSection />
            </section>
        </div>
    )
}

