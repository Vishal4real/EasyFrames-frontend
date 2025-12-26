import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Award, Heart, Shield, Truck, Users } from 'lucide-react';
import BottomCTA from '@/components/BottomCTA';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about EasyFrames - your trusted source for premium quality frames. Discover our story, mission, and commitment to excellence in frame design and customer service.',
  keywords: ['about easyframes', 'frame company', 'premium frames', 'frame manufacturer', 'frame retailer'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us - EasyFrames',
    description: 'Learn about EasyFrames - your trusted source for premium quality frames.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight font-playfair bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About EasyFrames
            </h1>
            <p className="text-base lg:text-base text-slate-300 max-w-3xl mx-auto font-inter">
              Crafting premium frames that transform your favorite art into stunning displays
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mt-16 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight font-playfair bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-sm sm:text-base md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
                EasyFrames was born from a simple passion: helping people showcase their favorite art, memories, and moments in the most beautiful way possible. We believe that every piece deserves a frame that enhances its beauty and protects it for years to come.
              </p>
              <p className="text-sm sm:text-base md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
                Since our founding, we've been committed to providing premium quality frames that combine timeless elegance with modern design. Our curated collection features frames for every style - from classic and rustic to modern and minimalist.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400"
                  alt="Our workspace"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mt-16 py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight font-playfair bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mt-1 font-inter max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'We source only the finest materials and craftsmanship for every frame in our collection.',
              },
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Your satisfaction is our top priority. We go above and beyond to ensure you love your purchase.',
              },
              {
                icon: Shield,
                title: 'Trust & Reliability',
                description: 'With thousands of satisfied customers, we\'ve built a reputation you can trust.',
              },
              {
                icon: Truck,
                title: 'Fast Shipping',
                description: 'Get your frames delivered quickly and safely, right to your doorstep.',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Join a community of art lovers and frame enthusiasts who share your passion.',
              },
              {
                icon: ArrowRight,
                title: 'Innovation',
                description: 'We continuously explore new designs and trends to bring you the latest in frame styling.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-slate-900 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-inter">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BottomCTA />
        </div>
      </section>
    </div>
  );
}
