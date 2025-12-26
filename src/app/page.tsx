import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import BrandLayer from '@/components/BrandLayer';
import EditorialSection from '@/components/EditorialSection';
import TopSelling from '@/components/TopSelling';
import TestimonialV2 from '@/components/ui/testimonial-v2';
import BottomCTA from '@/components/BottomCTA';
import { CategoryCarousel } from '@/components/CategoryCarousel';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Transform your space with our curated collection of high-quality frames. Perfect for Marvel, Anime, Home Decor and more. Shop premium frames today!',
  keywords: ['frames', 'picture frames', 'art frames', 'premium frames', 'modern frames', 'classic frames', 'home decor', 'marvel frames', 'anime frames'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EasyFrames - Premium Frames for Your Favorite Art',
    description: 'Transform your space with our curated collection of high-quality frames.',
    url: '/',
  },
};

export default function Home() {
  return (
    <div className="lg:-mt-10 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 1. Hero - Single message, one CTA */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Brand Layer */}
      <BrandLayer />

      {/* 4. Collection Sections */}
      <section className="mt-16">
        <CategoryCarousel />
      </section>


      {/* 5. Top Selling */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TopSelling timeperiod="Month" />
        </div>
      </section>

       {/* 6. Editorial Section */}
       <section className="mt-16">
        <EditorialSection />
      </section>

      {/* 7. Testimonials */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TestimonialV2 />
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BottomCTA />
        </div>
      </section>
    </div>
  );
}
