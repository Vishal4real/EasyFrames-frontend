import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight, Ruler, Palette, Home } from 'lucide-react'

const editorialContent = [
    {
        id: 1,
        title: "How to Style Frames in Small Rooms",
        description: "Maximize your space with strategic frame placement. Learn how to create visual impact without overwhelming your room.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        icon: Home,
    },
    {
        id: 2,
        title: "Choosing the Right Frame Size",
        description: "Perfect sizing guide: from 2BHK living rooms to studio apartments. Find the ideal frame dimensions for your space.",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=400&fit=crop",
        icon: Ruler,
    },
    {
        id: 3,
        title: "Frame Material Guide: GSM, Finish, Durability",
        description: "Understand frame materials: 300 GSM premium prints, matte finishes, and what makes frames last for years.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        icon: Palette,
    },
]

export default function EditorialSection() {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 md:py-20 lg:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-playfair text-gray-900 dark:text-white mb-4">
                        Style & Guide
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-inter">
                        Expert tips to help you choose and style frames that transform your space
                    </p>
                </div>

                {/* Editorial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {editorialContent.map((item) => {
                        const Icon = item.icon
                        return (
                            <article
                                key={item.id}
                                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="relative h-48 md:h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                                            <Icon className="w-5 h-5 text-blue-900" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-playfair group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
                                        {item.description}
                                    </p>
                                    <Link href={`/guide/${item.id}`}>
                                        <Button
                                            variant="ghost"
                                            className="text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 font-semibold font-inter group-hover:gap-2 transition-all"
                                        >
                                            Read More
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

