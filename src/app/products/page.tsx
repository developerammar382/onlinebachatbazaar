'use client'

import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Star, ShoppingCart, Filter, Search } from 'lucide-react'
import { useState } from 'react'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      image: '/api/placeholder/300/300',
      rating: 4.5,
      reviews: 128,
      category: 'Electronics',
      badge: 'Best Seller',
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 199.99,
      originalPrice: 249.99,
      image: '/api/placeholder/300/300',
      rating: 4.3,
      reviews: 89,
      category: 'Electronics',
      badge: 'New',
      inStock: true
    },
    {
      id: 3,
      name: 'Laptop Stand Adjustable',
      price: 49.99,
      originalPrice: 69.99,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviews: 203,
      category: 'Office',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 4,
      name: 'Wireless Charging Pad',
      price: 29.99,
      originalPrice: 39.99,
      image: '/api/placeholder/300/300',
      rating: 4.2,
      reviews: 67,
      category: 'Electronics',
      badge: 'Popular',
      inStock: false
    },
    {
      id: 5,
      name: 'Yoga Mat Premium',
      price: 39.99,
      originalPrice: 49.99,
      image: '/api/placeholder/300/300',
      rating: 4.6,
      reviews: 145,
      category: 'Sports',
      badge: 'Eco-Friendly',
      inStock: true
    },
    {
      id: 6,
      name: 'Coffee Maker Deluxe',
      price: 89.99,
      originalPrice: 119.99,
      image: '/api/placeholder/300/300',
      rating: 4.4,
      reviews: 92,
      category: 'Home',
      badge: 'Limited Edition',
      inStock: true
    },
    {
      id: 7,
      name: 'Running Shoes Pro',
      price: 129.99,
      originalPrice: 159.99,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviews: 234,
      category: 'Sports',
      badge: 'Top Rated',
      inStock: true
    },
    {
      id: 8,
      name: 'Bluetooth Speaker',
      price: 59.99,
      originalPrice: 79.99,
      image: '/api/placeholder/300/300',
      rating: 4.1,
      reviews: 56,
      category: 'Electronics',
      badge: 'Waterproof',
      inStock: true
    }
  ]

  const categories = ['all', 'Electronics', 'Sports', 'Home', 'Office', 'Clothing']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">Discover our complete collection of quality products</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-50">Under $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="200+">Over $200</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 left-2">
                  {product.badge}
                </Badge>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-bold">${product.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  size="sm"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSortBy('featured')
                setPriceRange('all')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  )
}