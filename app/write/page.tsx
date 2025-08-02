'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FiStar, FiTag, FiPlus, FiX, FiChevronDown, FiSearch, FiArrowLeft } from 'react-icons/fi'
import { sfNeighborhoods } from '@/data/sf-neighborhoods'

// Pre-defined tags
const predefinedTags = [
  'Safe', 'Walkable', 'Dirty', 'Noisy', 'Friendly', 'Food', 'Artsy', 'Parking', 'Transportation', 'Nightlife'
]

export default function WriteReviewPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const neighborhoodParam = searchParams.get('neighborhood')
  
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(() => {
    // If neighborhood parameter is provided and valid, use it; otherwise default to mission-district
    if (neighborhoodParam && sfNeighborhoods.find(n => n.slug === neighborhoodParam)) {
      return neighborhoodParam
    }
    return 'mission-district'
  })
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [customTag, setCustomTag] = useState('')
  const [showCustomTagInput, setShowCustomTagInput] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Neighborhood dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState(() => {
    // Pre-fill search query with neighborhood name if provided
    if (neighborhoodParam) {
      const neighborhood = sfNeighborhoods.find(n => n.slug === neighborhoodParam)
      return neighborhood ? neighborhood.name : ''
    }
    return ''
  })
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Filter neighborhoods based on search query
  const filteredNeighborhoods = sfNeighborhoods.filter(neighborhood =>
    neighborhood.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get selected neighborhood name for display
  const selectedNeighborhoodData = sfNeighborhoods.find(n => n.slug === selectedNeighborhood)
  const selectedNeighborhoodName = selectedNeighborhoodData?.name || ''

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleNeighborhoodSelect = (neighborhood: typeof sfNeighborhoods[0]) => {
    setSelectedNeighborhood(neighborhood.slug)
    setSearchQuery(neighborhood.name)
    setIsDropdownOpen(false)
  }

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove))
  }

  const handleAddCustomTag = () => {
    const trimmedTag = customTag.trim()
    if (trimmedTag && !selectedTags.includes(trimmedTag)) {
      setSelectedTags([...selectedTags, trimmedTag])
      setCustomTag('')
      setShowCustomTagInput(false)
      console.log('Added custom tag:', trimmedTag)
      console.log('Updated selected tags:', [...selectedTags, trimmedTag])
    } else {
      console.log('Tag already exists or is empty:', trimmedTag)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddCustomTag()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!reviewText.trim()) {
      alert('Please enter a review')
      return
    }
    
    if (rating === 0) {
      alert('Please select a rating')
      return
    }
    
    if (selectedTags.length === 0) {
      alert('Please select at least one tag')
      return
    }

    setIsSubmitting(true)

    try {
      // Create the review object
      const newReview = {
        id: Date.now(), // Simple ID generation
        rating,
        text: reviewText.trim(),
        tags: selectedTags,
        author: 'Anonymous', // In a real app, this would be the logged-in user
        date: 'Just now',
        neighborhood: selectedNeighborhood
      }

      // Store the review in localStorage (in a real app, this would go to a database)
      const existingReviews = JSON.parse(localStorage.getItem('wanderReviews') || '[]')
      const updatedReviews = [...existingReviews, newReview]
      localStorage.setItem('wanderReviews', JSON.stringify(updatedReviews))

      console.log('Review submitted:', newReview)
      
      // Show success message
      alert('Review posted successfully!')
      
      // Navigate to the neighborhood profile page
      router.push(`/neighborhood/${selectedNeighborhood}`)
      
    } catch (error) {
      console.error('Error submitting review:', error)
      alert('Error posting review. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => setRating(i)}
          className="transition-colors duration-200"
        >
          <FiStar 
            className={`w-8 h-8 ${
              i <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`} 
          />
        </button>
      )
    }
    return stars
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        {neighborhoodParam && (
          <div className="mb-6">
            <button
              onClick={() => router.push(`/neighborhood/${neighborhoodParam}`)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <FiArrowLeft className="w-4 h-4 mr-2" />
              Back to {selectedNeighborhoodData?.name || 'Neighborhood'}
            </button>
          </div>
        )}

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Write a Review</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Neighborhood Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Neighborhood
            </label>
            <div className="relative" ref={dropdownRef}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setIsDropdownOpen(true)
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                  placeholder="Search for a neighborhood..."
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiSearch className="w-4 h-4 text-gray-400" />
                </div>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="absolute inset-y-0 right-0 flex items-center pr-10"
                >
                  <FiChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Dropdown Options */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredNeighborhoods.length > 0 ? (
                    filteredNeighborhoods.map((neighborhood) => (
                      <button
                        key={neighborhood.id}
                        type="button"
                        onClick={() => handleNeighborhoodSelect(neighborhood)}
                        className={`w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none ${
                          neighborhood.slug === selectedNeighborhood ? 'bg-primary-50 text-primary-800' : 'text-gray-900'
                        }`}
                      >
                        <div className="font-medium">{neighborhood.name}</div>
                        <div className="text-sm text-gray-500">{neighborhood.description}</div>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-center">
                      No neighborhoods found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Review
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Enter your review"
              maxLength={500}
              rows={4}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
            />
            <div className="flex justify-end mt-1">
              <span className="text-sm text-gray-500">
                {reviewText.length}/500
              </span>
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex items-center space-x-1">
              {renderStars(rating)}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What stood out?
            </label>
            
            {/* Selected Tags Display */}
            {selectedTags.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Selected tags:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 border border-primary-200 flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 p-0.5 rounded-full hover:bg-primary-200 transition-colors duration-200"
                        title="Remove tag"
                      >
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-4">
              {predefinedTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedTags.includes(tag)
                      ? 'bg-primary-100 text-primary-800 border border-primary-200'
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setShowCustomTagInput(true)}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors duration-200 flex items-center"
              >
                <FiPlus className="w-4 h-4 mr-1" />
                Add a tag
              </button>
            </div>
            
            {showCustomTagInput && (
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={customTag}
                  onChange={(e) => setCustomTag(e.target.value)}
                  placeholder="Enter custom tag"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  onKeyDown={handleKeyPress}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleAddCustomTag}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCustomTagInput(false)
                    setCustomTag('')
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-lg py-4 rounded-lg font-medium transition-colors duration-200 ${
              isSubmitting 
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                : 'btn-primary'
            }`}
          >
            {isSubmitting ? 'Posting Review...' : 'Post My Review'}
          </button>
        </form>
      </div>
    </div>
  )
} 