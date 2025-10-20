'use client'

import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Grid, List } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Latest gadgets, smartphones, laptops, and accessories',
      image: '/api/placeholder/400/300',
      productCount: 245,
      featured: true
    },
    {
      id: 2,
      name: 'Clothing & Fashion',
      description: 'Trendy apparel, shoes, and fashion accessories',
      image: '/api/placeholder/400/300',
      productCount: 189,
      featured: true
    },
    {
      id: 3,
      name: 'Home & Garden',
      description: 'Furniture, decor, and garden supplies',
      image: '/api/placeholder/400/300',
      productCount: 156,
      featured: false
    },
    {
      id: 4,
      name: 'Sports & Outdoors',
      description: 'Sports equipment, activewear, and outdoor gear',
      image: '/api/placeholder/400/300',
      productCount: 98,
      featured: true
    },
    {
      id: 5,
      name: 'Office Supplies',
      description: 'Desk accessories, stationery, and office furniture',
      image: '/api/placeholder/400/300',
      productCount: 67,
      featured: false
    },
    {
      id: 6,
      name: 'Health & Beauty',
      description: 'Skincare, makeup, and personal care products',
      image: '/api/placeholder/400/300',
      productCount: 134,
      featured: true
    },
    {
      id: 7,
      name: 'Toys & Games',
      description: 'Educational toys, board games, and entertainment',
      image: '/api/placeholder/400/300',
      productCount: 89,
      featured: false
    },
    {
      id: 8,
      name: 'Books & Media',
      description: 'Books, ebooks, movies, and music',
      image: '/api/placeholder/400/300',
      productCount: 203,
      featured: false
    }
  ]

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our wide range of products organized by category. Find exactly what you're looking for.
          </p>
        </div>

        {/* Search and View Toggle */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Featured Categories */}
        {searchTerm === '' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.filter(cat => cat.featured).map((category) => (
                <Link key={category.id} href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="group hover:shadow-lg transition-all hover:scale-105 overflow-hidden">
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="text-white text-center">
                          <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                          <p className="text-sm opacity-90">{category.productCount} products</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {searchTerm ? 'Search Results' : 'All Categories'}
          </h2>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                <Link key={category.id} href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="group hover:shadow-lg transition-all hover:scale-105">
                    <CardContent className="p-6">
                      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{category.productCount} products</Badge>
                        {category.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCategories.map((category) => (
                <Link key={category.id} href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="group hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                              <p className="text-muted-foreground text-sm">{category.description}</p>
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="outline">{category.productCount} products</Badge>
                              {category.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No categories found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms
              </p>
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}