'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">Wander</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              href="/neighborhoods" 
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/neighborhoods' 
                  ? 'text-primary-600' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Browse Neighborhoods
            </Link>
            <Link 
              href="/write" 
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/write' 
                  ? 'text-primary-600' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Write a Review
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 