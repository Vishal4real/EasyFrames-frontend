import React from 'react'
import { BRAND_MESSAGES } from '@/lib/brand'

export default function BrandLayer() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-20 lg:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-playfair text-gray-900 dark:text-white">
                        {BRAND_MESSAGES.belief}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-inter max-w-2xl mx-auto">
                        At EasyFrames, we curate premium frames that transform your walls into personal galleries. 
                        Every frame tells a story, and we believe yours should reflect who you are.
                    </p>
                </div>
            </div>
        </section>
    )
}

