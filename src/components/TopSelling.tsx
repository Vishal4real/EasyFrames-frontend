"use client"
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

// Lifestyle images - frames in room settings
const monthFrame = [
    {
        id: 1,
        name: "Classic Bedroom Frames",
        price: 249,
        originalPrice: 349,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop", // Lifestyle: frames on bedroom wall
        hoverImage: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=600&fit=crop", // Close-up
        category: "Classic",
        badge: "Best Seller" as const,
        size: "10\" × 12\""
    },
    {
        id: 2,
        name: "Modern Office Collection",
        price: 299,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", // Lifestyle: frames in office
        hoverImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        category: "Modern",
        badge: "Sale" as const,
        size: "12\" × 16\""
    },
    {
        id: 3,
        name: "Designer Living Room",
        price: 599,
        originalPrice: 799,
        image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&h=600&fit=crop", // Lifestyle: frames in living room
        hoverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        category: "Designer",
        badge: undefined,
        size: "16\" × 20\""
    }
]

const weekFrame = [
    {
        id: 4,
        name: "Minimalist Studio Frames",
        price: 449,
        originalPrice: 549,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop", // Lifestyle: minimal frames
        hoverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        category: "Minimalist",
        badge: "New" as const,
        size: "8\" × 10\""
    },
    {
        id: 5,
        name: "Luxury Gallery Frames",
        price: 499,
        originalPrice: 649,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop", // Lifestyle: gallery wall
        hoverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        category: "Luxury",
        badge: undefined,
        size: "14\" × 18\""
    },
    {
        id: 6,
        name: "Kids Room Collection",
        price: 249,
        originalPrice: 299,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop", // Lifestyle: kids room
        hoverImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        category: "Kids",
        badge: "Sale" as const,
        size: "6\" × 8\""
    },
]


function TopSelling({ timeperiod }: { timeperiod: string }) {
    const frames = timeperiod === "Month" ? monthFrame : weekFrame;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <div className="w-full">
            {/* Header Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={headerVariants}
                className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 md:gap-6 mb-8 md:mb-12'
            >
                <div className='flex-1 space-y-2 md:space-y-3'>
                    <h2 className="flex items-center justify-between w-full font-playfair text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                        Top Selling This {timeperiod}
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl font-inter'>
                        {timeperiod === "Month"
                            ? "Customer favorites from the past 30 days - premium 300 GSM frames with matte finish"
                            : "Most popular frames from the past 7 days - perfect for bedrooms, offices, and studios"
                        }
                    </p>
                </div>

                <div className='flex flex-col h-full justify-between gap-3 md:gap-4'>
                    <Button
                        className='cursor-pointer w-full sm:w-auto group border-2 border-gray-300 dark:border-gray-600 hover:border-slate-900 dark:hover:border-white text-slate-900 dark:text-white hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-inter'
                        variant={'outline'}
                    >
                        View All
                        <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                    </Button>
                </div>
            </motion.div>

            {/* Products Grid - Using ProductCard with lifestyle imagery */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
            >
                {frames.map((item, index) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        originalPrice={item.originalPrice}
                        image={item.image}
                        hoverImage={item.hoverImage}
                        badge={item.badge}
                        size={item.size}
                        category={item.category}
                        href={`/products/${item.id}`}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default TopSelling