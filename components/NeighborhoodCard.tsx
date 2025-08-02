import Link from 'next/link'
import { FiStar, FiMapPin } from 'react-icons/fi'

interface Neighborhood {
  id: number
  name: string
  rating: number
  status: 'good' | 'average' | 'poor'
  reviews: number
}

interface NeighborhoodCardProps {
  neighborhood: Neighborhood
}

export default function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  const getStatusColor = (status: string) => {
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

  const getStatusText = (status: string) => {
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

  const renderStars = (rating: number) => {
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

  return (
    <Link href={`/neighborhood/${neighborhood.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
        
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {renderStars(neighborhood.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {neighborhood.rating.toFixed(1)}
          </span>
        </div>
        
        <p className="text-sm text-gray-500">
          {neighborhood.reviews} reviews
        </p>
      </div>
    </Link>
  )
} 