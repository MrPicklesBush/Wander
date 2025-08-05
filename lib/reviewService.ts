import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  Timestamp 
} from 'firebase/firestore'
import { db } from './firebase'

export interface Review {
  id?: string
  neighborhood: string
  rating: number
  text: string
  tags: string[]
  author: string
  date: string
  createdAt?: Timestamp
}

// Save a new review to Firebase
export const saveReview = async (review: Omit<Review, 'id' | 'createdAt'>): Promise<string> => {
  try {
    console.log('Firebase saveReview called with:', review)
    console.log('Firebase db object:', db)
    
    const docRef = await addDoc(collection(db, 'reviews'), {
      ...review,
      createdAt: Timestamp.now()
    })
    
    console.log('Document written with ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error saving review to Firebase:', error)
    throw error
  }
}

// Get all reviews for a specific neighborhood
export const getReviewsForNeighborhood = async (neighborhoodSlug: string): Promise<Review[]> => {
  try {
    console.log('Getting reviews for neighborhood:', neighborhoodSlug)
    
    const q = query(
      collection(db, 'reviews'),
      where('neighborhood', '==', neighborhoodSlug),
      orderBy('createdAt', 'desc')
    )
    
    const querySnapshot = await getDocs(q)
    const reviews: Review[] = []
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      console.log('Found review document:', { id: doc.id, data })
      reviews.push({
        id: doc.id,
        ...data
      } as Review)
    })
    
    console.log('Found reviews:', reviews.length, 'for neighborhood:', neighborhoodSlug)
    console.log('All reviews data:', reviews)
    return reviews
  } catch (error) {
    console.error('Error getting reviews from Firebase:', error)
    return []
  }
}

// Get review count for all neighborhoods
export const getReviewCounts = async (): Promise<Record<string, number>> => {
  try {
    console.log('Getting review counts from Firebase')
    
    const querySnapshot = await getDocs(collection(db, 'reviews'))
    const counts: Record<string, number> = {}
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const neighborhood = data.neighborhood
      if (neighborhood) {
        counts[neighborhood] = (counts[neighborhood] || 0) + 1
      }
    })
    
    console.log('Review counts:', counts)
    return counts
  } catch (error) {
    console.error('Error getting review counts from Firebase:', error)
    return {}
  }
}

// Get average ratings for all neighborhoods
export const getAverageRatings = async (): Promise<Record<string, number>> => {
  try {
    console.log('Getting average ratings from Firebase')
    
    const querySnapshot = await getDocs(collection(db, 'reviews'))
    const ratings: Record<string, { total: number; count: number }> = {}
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const neighborhood = data.neighborhood
      const rating = data.rating
      
      if (neighborhood && rating) {
        if (!ratings[neighborhood]) {
          ratings[neighborhood] = { total: 0, count: 0 }
        }
        ratings[neighborhood].total += rating
        ratings[neighborhood].count += 1
      }
    })
    
    // Calculate averages
    const averages: Record<string, number> = {}
    Object.keys(ratings).forEach(neighborhood => {
      const { total, count } = ratings[neighborhood]
      averages[neighborhood] = total / count
    })
    
    console.log('Average ratings:', averages)
    return averages
  } catch (error) {
    console.error('Error getting average ratings from Firebase:', error)
    return {}
  }
}

// Get all reviews for debugging
export const getAllReviews = async (): Promise<Review[]> => {
  try {
    console.log('Getting all reviews from Firebase')
    
    const querySnapshot = await getDocs(collection(db, 'reviews'))
    const reviews: Review[] = []
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      console.log('Review found:', { id: doc.id, neighborhood: data.neighborhood, rating: data.rating })
      reviews.push({
        id: doc.id,
        ...data
      } as Review)
    })
    
    console.log('All reviews:', reviews)
    return reviews
  } catch (error) {
    console.error('Error getting all reviews from Firebase:', error)
    return []
  }
} 