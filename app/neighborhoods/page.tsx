'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import NeighborhoodCard from '@/components/NeighborhoodCard'
import { FiList, FiMap } from 'react-icons/fi'
import { sfNeighborhoods, searchNeighborhoods } from '@/data/sf-neighborhoods'
import dynamic from 'next/dynamic'

// Dynamic import for Map component to avoid SSR issues
const DynamicMap = dynamic(() => import("@/components/Map"), { 
  ssr: false,
  loading: () => <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">Loading map...</div>
});

export default function NeighborhoodsPage() {
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const [searchQuery, setSearchQuery] = useState('')

  // Check if we should default to map view based on URL parameter
  useEffect(() => {
    const viewParam = searchParams.get('view')
    if (viewParam === 'map') {
      setViewMode('map')
    }
  }, [searchParams])

  const filteredNeighborhoods = searchQuery 
    ? searchNeighborhoods(searchQuery)
    : sfNeighborhoods

  // Debug logging
  useEffect(() => {
    console.log('Search query changed:', searchQuery)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Neighborhoods</h1>
          
          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex-1 max-w-md">
              <SearchBar 
                placeholder="Search by neighborhood name..." 
                onSearch={(query) => {
                  console.log('SearchBar onSearch called with:', query)
                  setSearchQuery(query)
                }}
                disableNavigation={true}
              />
            </div>
            
            {/* View Toggle */}
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  viewMode === 'list'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <FiList className="mr-2" />
                List View
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  viewMode === 'map'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <FiMap className="mr-2" />
                Map View
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredNeighborhoods.length} of {sfNeighborhoods.length} neighborhoods
          </p>
        </div>

        {/* Content */}
        {viewMode === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNeighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm">
            <DynamicMap 
              key={searchQuery} // Force re-render when search changes
              height="h-[600px]" 
              searchNeighborhood={searchQuery || undefined}
            />
          </div>
        )}
      </div>
    </div>
  )
} 