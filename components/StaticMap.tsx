import Image from 'next/image'

interface StaticMapProps {
  height?: string
}

export default function StaticMap({ height = "h-96" }: StaticMapProps) {
  return (
    <div className={`${height} w-full rounded-lg overflow-hidden bg-gray-100`}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-4xl mb-4">🗺️</div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">San Francisco Bay Area</h3>
          <p className="text-gray-500 text-sm mb-4">
            Interactive neighborhood map available in Browse Neighborhoods
          </p>
          <div className="text-xs text-gray-400">
            Map shows San Francisco neighborhoods color-coded by rating
          </div>
        </div>
      </div>
    </div>
  )
} 