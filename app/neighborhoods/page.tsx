'use client'

import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import NeighborhoodCard from '@/components/NeighborhoodCard'
import MapPlaceholder from '@/components/MapPlaceholder'
import { FiList, FiMap } from 'react-icons/fi'

// Mock data for demonstration
const mockNeighborhoods = [
  { id: 1, name: 'Bernal Heights', rating: 4.2, status: 'good', reviews: 45 },
  { id: 2, name: 'Castro', rating: 4.1, status: 'good', reviews: 38 },
  { id: 3, name: 'Chinatown', rating: 3.5, status: 'average', reviews: 52 },
  { id: 4, name: 'Hayes Valley', rating: 4.3, status: 'good', reviews: 29 },
  { id: 5, name: 'Marina District', rating: 4.0, status: 'good', reviews: 41 },
  { id: 6, name: 'Mission', rating: 2.8, status: 'poor', reviews: 67 },
  { id: 7, name: 'Nob Hill', rating: 3.7, status: 'average', reviews: 33 },
  { id: 8, name: 'Outer Richmond', rating: 4.1, status: 'good', reviews: 24 },
  { id: 9, name: 'Potrero Hill', rating: 3.6, status: 'average', reviews: 31 },
  { id: 10, name: 'Russian Hill', rating: 4.0, status: 'good', reviews: 28 },
  { id: 11, name: 'South of Market', rating: 2.9, status: 'poor', reviews: 43 },
]

export default function NeighborhoodsPage() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNeighborhoods = mockNeighborhoods.filter(neighborhood =>
    neighborhood.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
                onSearch={setSearchQuery}
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

        {/* Content */}
        {viewMode === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNeighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm">
            <MapPlaceholder />
          </div>
        )}
      </div>
    </div>
  )
} 