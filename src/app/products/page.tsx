'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useProducts, useCategories } from '@/lib/hooks';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sliders } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

type SortOption = 'newest' | 'price-low' | 'price-high' | 'popular';

export default function ProductsPage() {
  const { products, loading } = useProducts();
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(true);

  const filteredAndSorted = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category_id === selectedCategory);
    }

    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        sorted.sort((a, b) => (b.review_count || 0) - (a.review_count || 0));
        break;
      case 'newest':
      default:
        sorted.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    return sorted;
  }, [products, selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 font-inter">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white font-playfair mb-2">
            Our Premium Frames
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-inter">
            Discover our complete collection of handcrafted frames
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white font-playfair">
                Filters
              </h3>

              {/* Categories */}
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 font-inter">
                  Category
                </h4>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors font-inter text-sm ${
                    !selectedCategory
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors font-inter text-sm ${
                      selectedCategory === cat.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 font-inter">
                  Price Range
                </h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm font-inter text-gray-600 dark:text-gray-400">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                onClick={() => {
                  setSelectedCategory(null);
                  setPriceRange([0, 1000]);
                  setSortBy('newest');
                }}
                variant="outline"
                className="w-full font-inter"
              >
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Sliders className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                  {filteredAndSorted.length} products
                </span>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-inter text-sm"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            {/* Products */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 animate-pulse"
                  />
                ))}
              </div>
            ) : filteredAndSorted.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSorted.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.original_price}
                    image={`https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop`}
                    hoverImage={`https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop`}
                    badge={product.badge}
                    size={product.sizes[0]}
                    category={product.category_id || 'General'}
                    href={`/products/${product.id}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg font-inter">
                  No products found matching your filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
