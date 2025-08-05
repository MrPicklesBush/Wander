'use client'

import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FiStar, FiMapPin, FiMessageSquare, FiTag, FiArrowLeft } from 'react-icons/fi'
import MapPlaceholder from '../../../components/MapPlaceholder'
import ReviewCard from '../../../components/ReviewCard'
import { getNeighborhoodBySlug } from '../../../data/sf-neighborhoods'
import { getReviewsForNeighborhood, Review } from '../../../lib/reviewService'
import dynamic from 'next/dynamic'

// Dynamic import for Map component to avoid SSR issues
const DynamicMap = dynamic(() => import("../../../components/Map"), { 
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">Loading map...</div>
})

export default function NeighborhoodProfilePage() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const slug = params.slug as string
  const neighborhood = getNeighborhoodBySlug(slug)
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  // Check if user came from map view
  const fromMap = searchParams.get('from') === 'map'

  // Load reviews from Firebase on component mount
  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true)
        const neighborhoodReviews = await getReviewsForNeighborhood(slug)
        setReviews(neighborhoodReviews)
      } catch (error) {
        console.error('Error loading reviews:', error)
        setReviews([])
      } finally {
        setLoading(false)
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

  // Calculate actual review count from loaded reviews
  const actualReviewCount = reviews.length

  // Calculate average rating from actual reviews
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0
    
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
    return totalRating / reviews.length
  }

  const averageRating = calculateAverageRating()

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
            {averageRating > 0 && (
              <>
                <div className="flex items-center mr-4">
                  {renderStars(averageRating)}
                </div>
                <span className="text-lg text-gray-600 mr-2">
                  {averageRating.toFixed(1)}
                </span>
              </>
            )}
            <span className="text-gray-500">
              {actualReviewCount} review{actualReviewCount !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <DynamicMap 
            neighborhoodSlug={slug} 
            reviewCounts={{ [slug]: actualReviewCount }}
            averageRatings={{ [slug]: averageRating }}
          />
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
            {loading ? (
              <div className="text-center py-8 text-gray-500">
                <p>Loading reviews...</p>
              </div>
            ) : reviews.length > 0 ? (
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