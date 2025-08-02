import { FiStar, FiTag } from 'react-icons/fi'

interface Review {
  id: number
  rating: number
  text: string
  tags: string[]
  author: string
  date: string
}

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
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
    <div className="card">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            {renderStars(review.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {review.rating.toFixed(1)}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          {review.date}
        </div>
      </div>
      
      <p className="text-gray-900 mb-3">
        {review.text}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {review.tags.map((tag, index) => (
            <span key={index} className="tag tag-average text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <span>— {review.author}</span>
        </div>
      </div>
    </div>
  )
} 