"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, Star, Verified } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Digital Designer",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        testimonial: "The quality of these frames exceeded my expectations. I've been wearing glasses for 15 years, and these are by far the most comfortable and stylish I've owned. The attention to detail is remarkable.",
        rating: 5,
        verified: true,
        product: "Designer Series"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Software Engineer",
        location: "San Francisco, CA",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        testimonial: "Perfect for long coding sessions! The blue light protection really works, and the minimalist design matches my aesthetic perfectly. Customer service was exceptional too.",
        rating: 5,
        verified: true,
        product: "Minimalist Design"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Manager",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        testimonial: "I get compliments on these frames daily! They're lightweight, durable, and the prescription accuracy is spot-on. The virtual try-on feature made choosing so easy.",
        rating: 5,
        verified: true,
        product: "Modern Collection"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Architect",
        location: "Seattle, WA",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        testimonial: "Outstanding build quality and timeless design. These frames have become an essential part of my professional image. Worth every penny for the premium materials.",
        rating: 5,
        verified: true,
        product: "Classic Frames"
    },
    {
        id: 5,
        name: "Lisa Park",
        role: "Creative Director",
        location: "Los Angeles, CA",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
        testimonial: "The luxury collection is absolutely stunning. The craftsmanship is evident in every detail, and they feel incredibly premium. Best investment I've made for my vision.",
        rating: 5,
        verified: true,
        product: "Luxury Frames"
    }
]

function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
        setIsAutoPlaying(false)
    }

    const goToNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="mt-8 sm:mt-12 lg:mt-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto max-w-7xl">
                <div className="w-full md:mt-8 lg:mt-12">
                    <div className="group relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl shadow-lg">
                        {/* Header Section */}
                        <div className="text-left mb-6 sm:mb-8">
                            <h2 className="flex font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                                What Our Customers <span className="block bg-gradient-to-r from-blue-900 to-gray-900 bg-clip-text text-transparent">&nbsp;Are Saying</span>
                            </h2>

                            <p className="text-left mt-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed font-inter">
                                Real experiences from real customers who trust us!
                            </p>
                        </div>

                        {/* Main Carousel Container */}
                        <div className="relative max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">

                                {/* Photo Section */}
                                <div className="relative order-1 lg:order-1">
                                    <div className="relative group">
                                        {/* Main Image Container */}
                                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-1.5 sm:p-2">
                                            <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                                                <Image
                                                    src={currentTestimonial.image}
                                                    alt={currentTestimonial.name}
                                                    width={400}
                                                    height={300}
                                                    className="w-full h-[200px] xs:h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                                                />

                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                                {/* Customer Info Overlay */}
                                                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                                                    <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl p-2 sm:p-3">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            {currentTestimonial.verified && (
                                                                <div className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-600 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1">
                                                                    <Verified className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600 dark:text-blue-400" />
                                                                    <span className="text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-medium font-inter">Verified Purchase</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <h3 className="text-gray-900 dark:text-white text-sm sm:text-base font-bold mb-1 font-inter">
                                                            {currentTestimonial.name}
                                                        </h3>

                                                        <div className="flex items-center gap-1.5 mt-1">
                                                            <span className="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs font-inter">Product:</span>
                                                            <span className="text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs font-medium font-inter">
                                                                {currentTestimonial.product}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-blue-200 dark:bg-blue-800/30 rounded-full blur-xl" />
                                        <div className="absolute -bottom-2 -left-2 w-10 h-10 sm:w-16 sm:h-16 bg-gray-300 dark:bg-gray-700/30 rounded-full blur-2xl" />
                                    </div>
                                </div>

                                {/* Testimonial Section */}
                                <div className="relative order-2 lg:order-2 space-y-3 sm:space-y-4 md:space-y-5">
                                    {/* Quote Icon */}
                                    <div className="relative">
                                        <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400/30 dark:text-blue-500/30 absolute -top-2 -left-1" />
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex items-center gap-0.5 sm:gap-1 ml-4 sm:ml-6">
                                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 fill-current"
                                            />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <blockquote className="text-gray-900 dark:text-white text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed ml-4 sm:ml-6 relative font-inter">
                                        {currentTestimonial.testimonial}
                                    </blockquote>

                                    {/* Navigation Controls */}
                                    <div className="flex items-center justify-between ml-4 sm:ml-6 pt-4 sm:pt-6">
                                        {/* Slide Indicators */}
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            {testimonials.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => goToSlide(index)}
                                                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                                                            ? 'w-4 sm:w-6 h-2 sm:h-2.5 bg-blue-600 dark:bg-blue-500'
                                                            : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        {/* Navigation Buttons */}
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={goToPrevious}
                                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 transition-all duration-300"
                                            >
                                                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={goToNext}
                                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 transition-all duration-300"
                                            >
                                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Auto-play Control */}
                                    <div className="ml-4 sm:ml-6">
                                        <button
                                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-[10px] sm:text-xs transition-colors duration-300 font-inter"
                                        >
                                            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialCarousel