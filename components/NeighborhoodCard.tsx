import Link from 'next/link'
import { FiStar, FiMapPin } from 'react-icons/fi'
import { SFNeighborhood } from '@/data/sf-neighborhoods'

interface NeighborhoodCardProps {
  neighborhood: SFNeighborhood
  actualReviewCount?: number // New prop for actual review count
}

export default function NeighborhoodCard({ neighborhood, actualReviewCount }: NeighborhoodCardProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'good':
        return 'tag-good'
      case 'average':
        return 'tag-average'
      case 'poor':
        return 'tag-poor'
      default:
        return 'tag-average'
    }
  }

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'good':
        return 'Good'
      case 'average':
        return 'Average'
      case 'poor':
        return 'Poor'
      default:
        return 'Average'
    }
  }

  const renderStars = (rating?: number) => {
    if (!rating) return null
    
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FiStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <FiStar key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FiStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      )
    }

    return stars
  }

  // Use actual review count if provided, otherwise fall back to data file count
  const reviewCount = actualReviewCount !== undefined ? actualReviewCount : neighborhood.reviewCount || 0

  return (
    <Link href={`/neighborhood/${neighborhood.slug}`}>
      <div className="card hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <FiMapPin className="w-4 h-4 text-gray-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">{neighborhood.name}</h3>
          </div>
          <span className={`tag ${getStatusColor(neighborhood.status)}`}>
            {getStatusText(neighborhood.status)}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {neighborhood.description}
        </p>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {renderStars(neighborhood.avgRating)}
            {neighborhood.avgRating && (
              <span className="text-sm text-gray-600 ml-2">
                {neighborhood.avgRating.toFixed(1)}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">
            {reviewCount} review{reviewCount !== 1 ? 's' : ''}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {neighborhood.characteristics.slice(0, 3).map((char, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {char}
            </span>
          ))}
          {neighborhood.characteristics.length > 3 && (
            <span className="text-xs text-gray-500">+{neighborhood.characteristics.length - 3} more</span>
          )}
        </div>
      </div>
    </Link>
  )
} 