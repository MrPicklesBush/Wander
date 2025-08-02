import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import MapPlaceholder from '@/components/MapPlaceholder'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Explore and rate neighborhoods in San Francisco
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <SearchBar placeholder="Search by neighborhood name..." />
            </div>
            
            {/* Interactive Map Placeholder */}
            <div className="mb-12">
              <MapPlaceholder />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/neighborhoods" className="btn-primary">
                Browse Neighborhoods
              </Link>
              <Link href="/write" className="btn-secondary">
                Write a Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 