"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'

export interface ProductCardProps {
  id: string | number
  name: string
  price: number
  originalPrice?: number
  image: string
  hoverImage?: string // Alternate image for hover
  badge?: 'Best Seller' | 'New' | 'Sale' // Single badge only
  size?: string
  category?: string
  href?: string
  onAddToCart?: () => void
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  hoverImage,
  badge,
  size,
  category,
  href = `/products/${id}`,
  onAddToCart,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImage, setCurrentImage] = useState(image)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (hoverImage) {
      setCurrentImage(hoverImage)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCurrentImage(image)
  }

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Link
        href={href}
        className="group h-full flex flex-col overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image Section - Lifestyle image in room setting */}
        <div className="relative overflow-hidden rounded-t-2xl">
          {/* Single Badge */}
          {badge && (
            <div className="absolute top-3 left-3 z-20">
              <div className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm font-inter">
                {badge}
              </div>
            </div>
          )}

          {/* Product Image - Lifestyle */}
          <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={currentImage}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>

          {/* Overlay Gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Category & Size */}
          <div className="flex items-center justify-between">
            {category && (
              <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600 font-inter">
                {category}
              </span>
            )}
            {size && (
              <span className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                {size}
              </span>
            )}
          </div>

          {/* Product Title - Short, 1-2 lines max */}
          <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg leading-tight group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 font-inter flex-1">
            {name}
          </h3>

          {/* Pricing & Action - Price visually quieter */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white font-inter">
                  ₹{price}
                </span>
                {originalPrice && (
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-through font-inter">
                    ₹{originalPrice}
                  </span>
                )}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="sm"
                onClick={(e) => {
                  e.preventDefault()
                  onAddToCart?.()
                }}
                className="bg-slate-900 hover:bg-blue-900 text-white rounded-full w-10 h-10 md:w-12 md:h-12 p-0 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl font-inter"
              >
                <Plus className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

