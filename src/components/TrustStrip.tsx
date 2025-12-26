import React from 'react'
import { Truck, Package, Users } from 'lucide-react'
import { BRAND } from '@/lib/brand'

export default function TrustStrip() {
    return (
        <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
                    {/* Delivery */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Truck className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm sm:text-base font-inter">{BRAND.trust.delivery}</span>
                    </div>
                    
                    {/* Divider */}
                    <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
                    
                    {/* Shipping */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Package className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm sm:text-base font-inter">{BRAND.trust.shipping}</span>
                    </div>
                    
                    {/* Divider */}
                    <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
                    
                    {/* Bulk Orders */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Users className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm sm:text-base font-inter">{BRAND.trust.bulkOrders}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

