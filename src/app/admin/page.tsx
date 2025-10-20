'use client'

import { AdminLayout } from '@/components/admin/admin-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  ShoppingCart, 
  Package, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Eye,
  Edit,
  Trash2,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+12.5% from last month',
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Total Customers',
      value: '8,549',
      change: '+5.2% from last month',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Total Products',
      value: '456',
      change: '+2 new this week',
      trend: 'up',
      icon: Package,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      total: '$299.99',
      status: 'pending',
      date: '2024-01-15',
      email: 'john@example.com'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      total: '$199.99',
      status: 'processing',
      date: '2024-01-15',
      email: 'jane@example.com'
    },
    {
      id: 'ORD-003',
      customer: 'Bob Johnson',
      total: '$549.99',
      status: 'shipped',
      date: '2024-01-14',
      email: 'bob@example.com'
    },
    {
      id: 'ORD-004',
      customer: 'Alice Brown',
      total: '$89.99',
      status: 'delivered',
      date: '2024-01-14',
      email: 'alice@example.com'
    }
  ]

  const topProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      sales: 234,
      revenue: '$70,197.66',
      stock: 45,
      trend: '+12%'
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      sales: 189,
      revenue: '$37,798.11',
      stock: 23,
      trend: '+8%'
    },
    {
      id: 3,
      name: 'Laptop Stand Adjustable',
      sales: 156,
      revenue: '$7,798.44',
      stock: 67,
      trend: '+15%'
    },
    {
      id: 4,
      name: 'Wireless Charging Pad',
      sales: 145,
      revenue: '$4,348.55',
      stock: 12,
      trend: '-3%'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'processing': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'shipped': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200'
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/admin/products/new">
                <Package className="h-4 w-4 mr-2" />
                Add Product
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/admin/orders">View All Orders</Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-600 flex items-center mt-1">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
                  )}
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest customer orders</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/orders">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.email} • {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{order.total}</p>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>Best selling products</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/products">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">
                        {product.sales} sold • {product.stock} in stock
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">Trend:</span>
                        <span className={`text-xs font-medium ${
                          product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {product.trend}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{product.revenue}</p>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col hover:bg-blue-50 hover:border-blue-200" asChild>
                <Link href="/admin/products">
                  <Package className="h-6 w-6 mb-2 text-blue-600" />
                  <span className="text-sm">Manage Products</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col hover:bg-purple-50 hover:border-purple-200" asChild>
                <Link href="/admin/categories">
                  <Package className="h-6 w-6 mb-2 text-purple-600" />
                  <span className="text-sm">Manage Categories</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col hover:bg-green-50 hover:border-green-200" asChild>
                <Link href="/admin/orders">
                  <ShoppingCart className="h-6 w-6 mb-2 text-green-600" />
                  <span className="text-sm">Manage Orders</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col hover:bg-orange-50 hover:border-orange-200" asChild>
                <Link href="/admin/customers">
                  <Users className="h-6 w-6 mb-2 text-orange-600" />
                  <span className="text-sm">Manage Customers</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}