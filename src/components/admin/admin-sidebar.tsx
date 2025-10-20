'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Grid3X3,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Store,
  Tag,
  MessageSquare,
  FileText,
  HelpCircle
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    current: false
  },
  {
    name: 'Products',
    href: '/admin/products',
    icon: Package,
    current: false,
    badge: '456'
  },
  {
    name: 'Categories',
    href: '/admin/categories',
    icon: Grid3X3,
    current: false,
    badge: '8'
  },
  {
    name: 'Orders',
    href: '/admin/orders',
    icon: ShoppingBag,
    current: false,
    badge: '23'
  },
  {
    name: 'Customers',
    href: '/admin/customers',
    icon: Users,
    current: false,
    badge: '1.2k'
  },
  {
    name: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
    current: false
  },
  {
    name: 'Reviews',
    href: '/admin/reviews',
    icon: MessageSquare,
    current: false,
    badge: '5'
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    current: false
  }
]

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Store className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Admin Panel</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-slate-800"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-4 py-6">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    )}
                    onClick={() => onClose()}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </div>
                    {item.badge && (
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="space-y-2">
                <Link
                  href="/admin/help"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                  onClick={() => onClose()}
                >
                  <HelpCircle className="h-5 w-5" />
                  Help & Support
                </Link>
                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white w-full">
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </div>
            </div>
          </ScrollArea>

          {/* User info */}
          <div className="border-t border-slate-800 p-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-sm font-medium text-white">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">John Doe</p>
                <p className="text-xs text-slate-400 truncate">admin@ecommerce.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}