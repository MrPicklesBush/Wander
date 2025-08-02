'use client'

import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FiStar, FiMapPin, FiMessageSquare, FiTag, FiArrowLeft } from 'react-icons/fi'
import MapPlaceholder from '@/components/MapPlaceholder'
import ReviewCard from '@/components/ReviewCard'
import { getNeighborhoodBySlug } from '@/data/sf-neighborhoods'

// Mock reviews data (fallback)
const mockReviews = [
  {
    id: 1,
    rating: 3,
    text: 'Trash is a problem on Valencia but the community is vibrant!',
    tags: ['Trash', 'Artsy', 'Loud at night'],
    author: 'Anonymous',
    date: '2 days ago'
  },
  {
    id: 2,
    rating: 4,
    text: 'Great food scene and amazing street art everywhere you look.',
    tags: ['Artsy', 'Food', 'Walkable'],
    author: 'Sarah M.',
    date: '1 week ago'
  },
  {
    id: 3,
    rating: 2,
    text: 'Too noisy at night and parking is impossible.',
    tags: ['Noisy', 'Parking', 'Loud'],
    author: 'Anonymous',
    date: '2 weeks ago'
  }
]

export default function NeighborhoodProfilePage() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const slug = params.slug as string
  const neighborhood = getNeighborhoodBySlug(slug)
  const [reviews, setReviews] = useState(mockReviews)

  // Check if user came from map view
  const fromMap = searchParams.get('from') === 'map'

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const loadReviews = () => {
      try {
        const storedReviews = JSON.parse(localStorage.getItem('wanderReviews') || '[]')
        const neighborhoodReviews = storedReviews.filter((review: any) => 
          review.neighborhood === slug
        )
        
        // Combine stored reviews with mock reviews if no stored reviews exist
        if (neighborhoodReviews.length > 0) {
          setReviews(neighborhoodReviews)
        } else {
          setReviews(mockReviews)
        }
      } catch (error) {
        console.error('Error loading reviews:', error)
        setReviews(mockReviews)
      }
    }

    loadReviews()
  }, [slug])

  // Handle back navigation
  const handleBackNavigation = () => {
    if (fromMap) {
      // If user came from map view, go back to map view
      router.push('/neighborhoods?view=map')
    } else {
      // Otherwise go to default list view
      router.push('/neighborhoods')
    }
  }

  if (!neighborhood) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Neighborhood Not Found</h1>
          <p className="text-gray-600 mb-6">The neighborhood you're looking for doesn't exist.</p>
          <button
            onClick={handleBackNavigation}
            className="btn-secondary"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse Neighborhoods
          </button>
        </div>
      </div>
    )
  }

  const renderStars = (rating?: number) => {
    if (!rating) return null
    
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <FiStar key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FiStar key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      )
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={handleBackNavigation}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse Neighborhoods
          </button>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <FiMapPin className="w-6 h-6 text-gray-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">{neighborhood.name}</h1>
          </div>
          
          <p className="text-lg text-gray-600 mb-4">
            {neighborhood.description}
          </p>
          
          <div className="flex items-center mb-4">
            {neighborhood.avgRating && (
              <>
                <div className="flex items-center mr-4">
                  {renderStars(neighborhood.avgRating)}
                </div>
                <span className="text-lg text-gray-600 mr-2">
                  {neighborhood.avgRating.toFixed(1)}
                </span>
              </>
            )}
            {neighborhood.reviewCount && (
              <span className="text-gray-500">
                {neighborhood.reviewCount} reviews
              </span>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <MapPlaceholder />
        </div>

        {/* Tags Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <FiTag className="w-5 h-5 text-gray-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">What stood out?</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {neighborhood.characteristics.map((char, index) => (
              <span key={index} className="tag tag-average">
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <FiMessageSquare className="w-5 h-5 text-gray-400 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
            </div>
            <button 
              onClick={() => router.push(`/write?neighborhood=${slug}`)}
              className="btn-primary"
            >
              Write a Review
            </button>
          </div>
          
          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No reviews yet. Be the first to write a review!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 