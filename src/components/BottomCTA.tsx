"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

export default function BottomCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.8 }
      }}
      className="w-full mt-12 md:mt-16 lg:mt-20"
    >
      <motion.div 
        whileHover={{ 
          scale: 1.02,
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          transition: { type: "spring", stiffness: 400, damping: 17 }
        }}
        className="group relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-12 lg:p-16 transition-all duration-300 shadow-lg hover:shadow-2xl"
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] group-hover:opacity-[0.04] dark:group-hover:opacity-[0.05] transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left space-y-4 md:space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-left flex font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight font-playfair">
                Looking for something <span className="block bg-gradient-to-r from-blue-900 to-gray-900 bg-clip-text text-transparent">&nbsp;specific?</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl font-inter">
                Browse our complete collection of premium 300 GSM frames with matte finish. 5-7 day delivery, free prepaid shipping.
              </p>
            </div>

            {/* Features Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium font-inter transition-all duration-200 shadow-sm hover:shadow-md cursor-default"
              >
                <Star className="inline w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                Premium Quality
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium font-inter transition-all duration-200 shadow-sm hover:shadow-md cursor-default"
              >
                <TrendingUp className="inline w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                Latest Trends
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Action Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center lg:items-end gap-6"
          >
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, y: -4 }}
                className="space-y-1 cursor-default"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-inter">500+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-inter">Designs</div>
              </motion.div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
              <motion.div 
                whileHover={{ scale: 1.1, y: -4 }}
                className="space-y-1 cursor-default"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 font-inter">4.7★</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-inter">Rating</div>
              </motion.div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
              <motion.div 
                whileHover={{ scale: 1.1, y: -4 }}
                className="space-y-1 cursor-default"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-inter">10K+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-inter">Reviews</div>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="group relative overflow-hidden bg-slate-900 hover:bg-blue-900 text-white rounded-full px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-200 font-inter
                            sm:px-10 sm:py-5
                            md:px-12 md:py-6
                            min-w-[200px] sm:min-w-[240px] md:min-w-[280px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span className="whitespace-nowrap">Shop All Frames</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </span>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 text-xs md:text-sm text-gray-600 dark:text-gray-400 font-inter"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 cursor-default"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Premium Quality
              </motion.div>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 cursor-default"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                Fast Shipping
              </motion.div>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 cursor-default"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
                Loved by 10K+
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

