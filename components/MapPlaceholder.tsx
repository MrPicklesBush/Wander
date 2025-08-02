export default function MapPlaceholder() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div className="text-gray-500 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map</h3>
        <p className="text-gray-600">
          Color-coded neighborhoods: 🟢 Green = Good, 🟡 Yellow = Average, 🔴 Red = Poor
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Map integration coming soon...
        </p>
      </div>
    </div>
  )
} 