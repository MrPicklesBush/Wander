'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import NeighborhoodCard from '@/components/NeighborhoodCard'
import { FiList, FiMap } from 'react-icons/fi'
import { sfNeighborhoods, searchNeighborhoods } from '@/data/sf-neighborhoods'
import { getReviewCounts, getAverageRatings } from '@/lib/reviewService'
import dynamic from 'next/dynamic'

// Dynamic import for Map component to avoid SSR issues
const DynamicMap = dynamic(() => import("@/components/Map"), { 
  ssr: false,
  loading: () => <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">Loading map...</div>
});

function NeighborhoodsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Start with list view as default, will be updated by useEffect
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const [searchQuery, setSearchQuery] = useState('')
  const [reviewCounts, setReviewCounts] = useState<Record<string, number>>({})
  const [averageRatings, setAverageRatings] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)

  // Load review counts and average ratings from Firebase
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [counts, ratings] = await Promise.all([
          getReviewCounts(),
          getAverageRatings(),
        ])
        setReviewCounts(counts)
        setAverageRatings(ratings)
      } catch (error) {
        console.error('Error loading data:', error)
        setReviewCounts({})
        setAverageRatings({})
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Update view mode when URL parameters change
  useEffect(() => {
    const viewParam = searchParams.get('view')
    if (viewParam === 'map') {
      setViewMode('map')
    } else if (viewParam === 'list' || !viewParam) {
      setViewMode('list')
    }
  }, [searchParams])

  // Function to handle view mode changes
  const handleViewModeChange = (newViewMode: 'list' | 'map') => {
    setViewMode(newViewMode)
    
    // Update URL without page reload
    const params = new URLSearchParams(searchParams.toString())
    if (newViewMode === 'map') {
      params.set('view', 'map')
    } else {
      params.delete('view')
    }
    
    const newUrl = `${window.location.pathname}?${params.toString()}`
    router.replace(newUrl, { scroll: false })
  }

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
                onClick={() => handleViewModeChange('list')}
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
                onClick={() => handleViewModeChange('map')}
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
              <NeighborhoodCard 
                key={neighborhood.id} 
                neighborhood={neighborhood}
                actualReviewCount={loading ? 0 : (reviewCounts[neighborhood.slug] || 0)}
                averageRating={loading ? 0 : (averageRatings[neighborhood.slug] || 0)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm">
            <DynamicMap 
              key={searchQuery} // Force re-render when search changes
              height="h-[600px]" 
              searchNeighborhood={searchQuery || undefined}
              reviewCounts={reviewCounts}
              averageRatings={averageRatings}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default function NeighborhoodsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <NeighborhoodsContent />
    </Suspense>
  )
} 