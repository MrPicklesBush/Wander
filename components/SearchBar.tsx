'use client'

import { useState, useRef, useEffect } from 'react'
import { FiSearch, FiChevronDown, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { sfNeighborhoods } from '../data/sf-neighborhoods'
import { createPortal } from 'react-dom'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  disableNavigation?: boolean // New prop to disable navigation
}

export default function SearchBar({ placeholder = "Search...", onSearch, disableNavigation = false }: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })

  // Filter neighborhoods based on search query
  const filteredNeighborhoods = sfNeighborhoods.filter(neighborhood =>
    neighborhood.name.toLowerCase().includes(query.toLowerCase())
  )

  // Update dropdown position when input changes
  useEffect(() => {
    if (inputRef.current && isDropdownOpen) {
      const rect = inputRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      })
    }
  }, [isDropdownOpen, query])

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
    setQuery(neighborhood.name)
    setIsDropdownOpen(false)
    
    // Only navigate if navigation is not disabled
    if (!disableNavigation) {
      router.push(`/neighborhood/${neighborhood.slug}`)
    } else {
      // Just update the search query for map zoom functionality
      onSearch?.(neighborhood.name)
    }
  }

  const handleClear = () => {
    setQuery('')
    setIsDropdownOpen(false)
    onSearch?.('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
  }

  const renderDropdown = () => {
    if (!isDropdownOpen) return null

    const dropdownContent = (
      <div 
        ref={dropdownRef}
        className="fixed bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-[9999]"
        style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          width: dropdownPosition.width
        }}
      >
        {filteredNeighborhoods.length > 0 ? (
          filteredNeighborhoods.map((neighborhood) => (
            <button
              key={neighborhood.id}
              type="button"
              onClick={() => handleNeighborhoodSelect(neighborhood)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-gray-900"
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
    )

    // Render dropdown as a portal to avoid z-index issues
    return createPortal(dropdownContent, document.body)
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setIsDropdownOpen(true)
            }}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder={placeholder}
            className="w-full pl-10 pr-16 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-200"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <FiX className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <FiChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </form>
      
      {/* Render dropdown as portal */}
      {renderDropdown()}
    </div>
  )
} 