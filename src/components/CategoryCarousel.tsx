"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const frameCategories = [
    {
        name: "Classic Frames",
        price: 249,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=600&fit=crop",
        tag: "Popular",
        description: "Timeless elegance for any space"
    },
    {
        name: "Modern Collection",
        price: 299,
        originalPrice: 449,
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop",
        tag: "Trending",
        description: "Contemporary designs for modern homes"
    },
    {
        name: "Vintage Style",
        price: 349,
        originalPrice: 499,
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=600&fit=crop",
        tag: "Exclusive",
        description: "Nostalgic charm meets quality"
    },
    {
        name: "Minimalist Design",
        price: 199,
        originalPrice: 299,
        image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=600&fit=crop",
        tag: "Best Seller",
        description: "Clean lines, maximum impact"
    },
    {
        name: "Luxury Frames",
        price: 599,
        originalPrice: 799,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
        tag: "Premium",
        description: "Ultimate sophistication and quality"
    },
    {
        name: "Rustic Frames",
        price: 279,
        originalPrice: 379,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
        tag: "New",
        description: "Natural wood and vintage-inspired designs"
    }
]

export function CategoryCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    // Mouse position for magnetic effect
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 200 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    // Transform for parallax on the large number
    const numberX = useTransform(x, [-200, 200], [-20, 20])
    const numberY = useTransform(y, [-200, 200], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            mouseX.set(e.clientX - centerX)
            mouseY.set(e.clientY - centerY)
        }
    }

    const goNext = () => setActiveIndex((prev) => (prev + 1) % frameCategories.length)
    const goPrev = () => setActiveIndex((prev) => (prev - 1 + frameCategories.length) % frameCategories.length)

    useEffect(() => {
        const timer = setInterval(goNext, 5000)
        return () => clearInterval(timer)
    }, [])

    const current = frameCategories[activeIndex]

    return (
        <div className="w-full bg-gray-50 dark:bg-gray-900 py-8 md:py-12 lg:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-12'>
                    <div className='flex-1'>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight font-playfair bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                            Explore Our Collections
                        </h2>
                        <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mt-1 font-inter'>
                            Discover premium frames designed for every style and space
                        </p>
                    </div>
                    <div className='flex-shrink-0'>
                        <Button
                            className='cursor-pointer w-full sm:w-auto group border-2 border-gray-300 dark:border-gray-600 hover:border-slate-900 dark:hover:border-white text-slate-900 dark:text-white hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 rounded-full px-6 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-inter'
                            variant={'outline'}
                        >
                            View All
                            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>

                {/* Main Carousel Content */}
                <div ref={containerRef} className="relative w-full" onMouseMove={handleMouseMove}>
                    {/* Oversized index number - positioned to bleed off left edge */}
                    <motion.div
                        className="absolute -left-8 top-1/2 -translate-y-1/2 text-[20rem] sm:text-[24rem] lg:text-[28rem] font-bold text-gray-900/5 dark:text-white/5 select-none pointer-events-none leading-none tracking-tighter font-playfair hidden lg:block"
                        style={{ x: numberX, y: numberY }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                {String(activeIndex + 1).padStart(2, "0")}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Main content - asymmetric layout with photo */}
                    <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left column - Category Info */}
                        <div className="flex-1 pl-0 lg:pl-8 py-8 lg:py-12">
                            {/* Category badge */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="mb-6 lg:mb-8"
                                >
                                    <span className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1 bg-white dark:bg-gray-800 font-inter">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                                        {current.tag}
                                    </span>
                                </motion.div>
                            </AnimatePresence>

                            {/* Category name with character reveal */}
                            <div className="relative mb-6 lg:mb-8 min-h-[80px] lg:min-h-[100px]">
                                <AnimatePresence mode="wait">
                                    <motion.h3
                                        key={activeIndex}
                                        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent leading-[1.15] tracking-tight font-playfair"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {current.name.split(" ").map((word, i) => (
                                            <motion.span
                                                key={i}
                                                className="inline-block mr-[0.3em]"
                                                variants={{
                                                    hidden: { opacity: 0, y: 20, rotateX: 90 },
                                                    visible: {
                                                        opacity: 1,
                                                        y: 0,
                                                        rotateX: 0,
                                                        transition: {
                                                            duration: 0.5,
                                                            delay: i * 0.05,
                                                            ease: [0.22, 1, 0.36, 1],
                                                        },
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10,
                                                        transition: { duration: 0.2, delay: i * 0.02 },
                                                    },
                                                }}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </motion.h3>
                                </AnimatePresence>
                            </div>

                            {/* Description */}
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-inter"
                                >
                                    {current.description}
                                </motion.p>
                            </AnimatePresence>

                            {/* Price and Navigation row */}
                            <div className="flex items-end justify-between flex-wrap gap-4">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                        className="flex items-center gap-4"
                                    >
                                        {/* Animated line before price */}
                                        <motion.div
                                            className="w-8 h-px bg-gray-900 dark:bg-white"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            style={{ originX: 0 }}
                                        />
                                        <div>
                                            <div className="flex items-baseline space-x-2">
                                                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-inter">
                                                    ₹{current.price}
                                                </span>
                                                <span className="text-sm text-gray-500 dark:text-gray-400 line-through font-inter">
                                                    ₹{current.originalPrice}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation */}
                                <div className="flex items-center gap-4">
                                    <motion.button
                                        onClick={goPrev}
                                        className="group relative w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-slate-900 dark:bg-blue-900"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="relative z-10 text-gray-900 dark:text-white group-hover:text-white transition-colors"
                                        >
                                            <path
                                                d="M10 12L6 8L10 4"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </motion.button>

                                    <motion.button
                                        onClick={goNext}
                                        className="group relative w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-slate-900 dark:bg-blue-900"
                                            initial={{ x: "100%" }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="relative z-10 text-gray-900 dark:text-white group-hover:text-white transition-colors"
                                        >
                                            <path
                                                d="M6 4L10 8L6 12"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Category Indicators */}
                            <div className="flex items-center gap-2 mt-6 lg:mt-8 flex-wrap">
                                {frameCategories.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all duration-300 ${
                                            index === activeIndex
                                                ? 'bg-slate-900 dark:bg-blue-900 text-white'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right column - Frame Photo */}
                        <div className="flex-shrink-0 w-full lg:w-96 xl:w-[500px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative group"
                                >
                                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-1.5 sm:p-2 shadow-lg hover:shadow-2xl transition-all duration-300">
                                        <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                                            <Image
                                                src={current.image}
                                                alt={current.name}
                                                width={600}
                                                height={600}
                                                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            
                                            {/* Category Info Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                                                <div className="text-white">
                                                    <p className="text-lg sm:text-xl font-bold font-inter">{current.name}</p>
                                                    <p className="text-sm sm:text-base text-white/90 font-inter">{current.description}</p>
                                                </div>
                                            </div>

                                            {/* Tag Badge */}
                                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white px-3 py-1.5 rounded-full text-xs font-semibold font-inter">
                                                {current.tag}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Bottom ticker - subtle repeating category names */}
                    <div className="absolute -bottom-20 left-0 right-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05] pointer-events-none hidden lg:block">
                        <motion.div
                            className="flex whitespace-nowrap text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent font-playfair"
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            {[...Array(10)].map((_, i) => (
                                <span key={i} className="mx-8">
                                    {frameCategories.map((c) => c.name).join(" • ")} •
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}