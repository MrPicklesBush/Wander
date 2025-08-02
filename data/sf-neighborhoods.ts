export interface SFNeighborhood {
  id: string
  name: string
  slug: string
  description: string
  coordinates: {
    lat: number
    lng: number
  }
  area: string
  population?: number
  characteristics: string[]
  avgRating?: number
  reviewCount?: number
  status?: 'good' | 'average' | 'poor'
}

export const sfNeighborhoods: SFNeighborhood[] = [
  // Downtown/Civic Center Area
  {
    id: 'civic-center',
    name: 'Civic Center',
    slug: 'civic-center',
    description: 'Government and cultural district with City Hall, museums, and performing arts venues.',
    coordinates: { lat: 37.7793, lng: -122.4173 },
    area: 'Downtown',
    characteristics: ['Government', 'Cultural', 'Transit Hub', 'Historic'],
    avgRating: 3.2,
    reviewCount: 45,
    status: 'average'
  },
  {
    id: 'south-of-market',
    name: 'South of Market (SoMa)',
    slug: 'south-of-market',
    description: 'Tech hub and entertainment district with museums, galleries, and nightlife.',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    area: 'Downtown',
    characteristics: ['Tech', 'Nightlife', 'Arts', 'Industrial'],
    avgRating: 2.9,
    reviewCount: 67,
    status: 'poor'
  },
  {
    id: 'financial-district',
    name: 'Financial District',
    slug: 'financial-district',
    description: 'Business and financial center with skyscrapers and corporate headquarters.',
    coordinates: { lat: 37.7925, lng: -122.4019 },
    area: 'Downtown',
    characteristics: ['Business', 'Skyscrapers', 'Corporate', 'Transit'],
    avgRating: 3.5,
    reviewCount: 38,
    status: 'average'
  },

  // North Side
  {
    id: 'north-beach',
    name: 'North Beach',
    slug: 'north-beach',
    description: 'Italian neighborhood known for restaurants, cafes, and historic charm.',
    coordinates: { lat: 37.8000, lng: -122.4100 },
    area: 'North Side',
    characteristics: ['Italian', 'Food', 'Historic', 'Walkable'],
    avgRating: 4.1,
    reviewCount: 52,
    status: 'good'
  },
  {
    id: 'telegraph-hill',
    name: 'Telegraph Hill',
    slug: 'telegraph-hill',
    description: 'Residential area with Coit Tower and panoramic city views.',
    coordinates: { lat: 37.8025, lng: -122.4050 },
    area: 'North Side',
    characteristics: ['Residential', 'Views', 'Historic', 'Quiet'],
    avgRating: 4.3,
    reviewCount: 29,
    status: 'good'
  },
  {
    id: 'russian-hill',
    name: 'Russian Hill',
    slug: 'russian-hill',
    description: 'Upscale residential neighborhood with steep streets and Victorian homes.',
    coordinates: { lat: 37.8000, lng: -122.4200 },
    area: 'North Side',
    characteristics: ['Upscale', 'Residential', 'Victorian', 'Hills'],
    avgRating: 4.0,
    reviewCount: 28,
    status: 'good'
  },
  {
    id: 'nob-hill',
    name: 'Nob Hill',
    slug: 'nob-hill',
    description: 'Historic neighborhood with luxury hotels and cable cars.',
    coordinates: { lat: 37.7940, lng: -122.4150 },
    area: 'North Side',
    characteristics: ['Luxury', 'Historic', 'Hotels', 'Cable Cars'],
    avgRating: 3.7,
    reviewCount: 33,
    status: 'average'
  },
  {
    id: 'pacific-heights',
    name: 'Pacific Heights',
    slug: 'pacific-heights',
    description: 'Affluent residential area with Victorian mansions and bay views.',
    coordinates: { lat: 37.7900, lng: -122.4300 },
    area: 'North Side',
    characteristics: ['Affluent', 'Residential', 'Victorian', 'Views'],
    avgRating: 4.2,
    reviewCount: 41,
    status: 'good'
  },
  {
    id: 'marina-district',
    name: 'Marina District',
    slug: 'marina-district',
    description: 'Waterfront neighborhood with yacht harbor, parks, and shopping.',
    coordinates: { lat: 37.8000, lng: -122.4400 },
    area: 'North Side',
    characteristics: ['Waterfront', 'Parks', 'Shopping', 'Yacht Harbor'],
    avgRating: 4.0,
    reviewCount: 41,
    status: 'good'
  },
  {
    id: 'cow-hollow',
    name: 'Cow Hollow',
    slug: 'cow-hollow',
    description: 'Residential area between Pacific Heights and the Marina.',
    coordinates: { lat: 37.7950, lng: -122.4350 },
    area: 'North Side',
    characteristics: ['Residential', 'Quiet', 'Family-friendly', 'Walkable'],
    avgRating: 4.1,
    reviewCount: 24,
    status: 'good'
  },

  // Central/Eastern
  {
    id: 'hayes-valley',
    name: 'Hayes Valley',
    slug: 'hayes-valley',
    description: 'Trendy neighborhood with boutique shopping, restaurants, and arts.',
    coordinates: { lat: 37.7750, lng: -122.4250 },
    area: 'Central',
    characteristics: ['Trendy', 'Boutiques', 'Restaurants', 'Arts'],
    avgRating: 4.3,
    reviewCount: 29,
    status: 'good'
  },
  {
    id: 'alamo-square',
    name: 'Alamo Square',
    slug: 'alamo-square',
    description: 'Residential area famous for the Painted Ladies Victorian houses.',
    coordinates: { lat: 37.7760, lng: -122.4330 },
    area: 'Central',
    characteristics: ['Victorian', 'Residential', 'Historic', 'Painted Ladies'],
    avgRating: 4.0,
    reviewCount: 35,
    status: 'good'
  },
  {
    id: 'western-addition',
    name: 'Western Addition',
    slug: 'western-addition',
    description: 'Diverse neighborhood with Victorian homes and jazz history.',
    coordinates: { lat: 37.7800, lng: -122.4300 },
    area: 'Central',
    characteristics: ['Diverse', 'Victorian', 'Jazz History', 'Residential'],
    avgRating: 3.6,
    reviewCount: 31,
    status: 'average'
  },
  {
    id: 'fillmore-district',
    name: 'Fillmore District',
    slug: 'fillmore-district',
    description: 'Historic jazz district with cultural heritage and shopping.',
    coordinates: { lat: 37.7850, lng: -122.4350 },
    area: 'Central',
    characteristics: ['Jazz History', 'Cultural', 'Shopping', 'Historic'],
    avgRating: 3.4,
    reviewCount: 42,
    status: 'average'
  },

  // Mission Area
  {
    id: 'mission-district',
    name: 'Mission District',
    slug: 'mission-district',
    description: 'Vibrant Latino neighborhood with murals, restaurants, and nightlife.',
    coordinates: { lat: 37.7600, lng: -122.4200 },
    area: 'Mission',
    characteristics: ['Latino', 'Murals', 'Restaurants', 'Nightlife', 'Artsy'],
    avgRating: 3.2,
    reviewCount: 158,
    status: 'average'
  },
  {
    id: 'bernal-heights',
    name: 'Bernal Heights',
    slug: 'bernal-heights',
    description: 'Residential neighborhood with a small-town feel and community spirit.',
    coordinates: { lat: 37.7400, lng: -122.4200 },
    area: 'Mission',
    characteristics: ['Residential', 'Community', 'Family-friendly', 'Hills'],
    avgRating: 4.2,
    reviewCount: 45,
    status: 'good'
  },
  {
    id: 'potrero-hill',
    name: 'Potrero Hill',
    slug: 'potrero-hill',
    description: 'Residential neighborhood with bay views and industrial history.',
    coordinates: { lat: 37.7600, lng: -122.4000 },
    area: 'Mission',
    characteristics: ['Residential', 'Bay Views', 'Industrial History', 'Hills'],
    avgRating: 3.6,
    reviewCount: 31,
    status: 'average'
  },
  {
    id: 'dogpatch',
    name: 'Dogpatch',
    slug: 'dogpatch',
    description: 'Former industrial area now home to artists and tech companies.',
    coordinates: { lat: 37.7550, lng: -122.3900 },
    area: 'Mission',
    characteristics: ['Industrial', 'Artists', 'Tech', 'Waterfront'],
    avgRating: 3.8,
    reviewCount: 26,
    status: 'average'
  },

  // Castro Area
  {
    id: 'castro',
    name: 'Castro',
    slug: 'castro',
    description: 'Historic LGBTQ+ neighborhood with vibrant culture and nightlife.',
    coordinates: { lat: 37.7600, lng: -122.4350 },
    area: 'Castro',
    characteristics: ['LGBTQ+', 'Historic', 'Nightlife', 'Cultural'],
    avgRating: 4.1,
    reviewCount: 38,
    status: 'good'
  },
  {
    id: 'noe-valley',
    name: 'Noe Valley',
    slug: 'noe-valley',
    description: 'Family-friendly neighborhood with shops, restaurants, and parks.',
    coordinates: { lat: 37.7500, lng: -122.4350 },
    area: 'Castro',
    characteristics: ['Family-friendly', 'Shops', 'Restaurants', 'Parks'],
    avgRating: 4.0,
    reviewCount: 47,
    status: 'good'
  },
  {
    id: 'glen-park',
    name: 'Glen Park',
    slug: 'glen-park',
    description: 'Residential neighborhood with village feel and canyon park.',
    coordinates: { lat: 37.7300, lng: -122.4300 },
    area: 'Castro',
    characteristics: ['Residential', 'Village Feel', 'Canyon Park', 'Quiet'],
    avgRating: 3.9,
    reviewCount: 22,
    status: 'good'
  },

  // Chinatown
  {
    id: 'chinatown',
    name: 'Chinatown',
    slug: 'chinatown',
    description: 'Historic Chinese neighborhood with authentic restaurants and shops.',
    coordinates: { lat: 37.7940, lng: -122.4070 },
    area: 'Chinatown',
    characteristics: ['Chinese', 'Historic', 'Restaurants', 'Authentic'],
    avgRating: 3.5,
    reviewCount: 52,
    status: 'average'
  },
  {
    id: 'north-beach-chinatown',
    name: 'North Beach/Chinatown',
    slug: 'north-beach-chinatown',
    description: 'Overlap area between Italian and Chinese cultural districts.',
    coordinates: { lat: 37.7970, lng: -122.4080 },
    area: 'Chinatown',
    characteristics: ['Italian', 'Chinese', 'Cultural', 'Historic'],
    avgRating: 3.8,
    reviewCount: 33,
    status: 'average'
  },

  // Western Neighborhoods
  {
    id: 'sunset-district',
    name: 'Sunset District',
    slug: 'sunset-district',
    description: 'Residential neighborhood with fog, beaches, and family homes.',
    coordinates: { lat: 37.7500, lng: -122.4800 },
    area: 'Western',
    characteristics: ['Residential', 'Fog', 'Beaches', 'Family Homes'],
    avgRating: 3.7,
    reviewCount: 89,
    status: 'average'
  },
  {
    id: 'richmond-district',
    name: 'Richmond District',
    slug: 'richmond-district',
    description: 'Residential area with diverse population and Golden Gate Park access.',
    coordinates: { lat: 37.7800, lng: -122.4700 },
    area: 'Western',
    characteristics: ['Residential', 'Diverse', 'Golden Gate Park', 'Family-friendly'],
    avgRating: 3.8,
    reviewCount: 76,
    status: 'average'
  },
  {
    id: 'outer-richmond',
    name: 'Outer Richmond',
    slug: 'outer-richmond',
    description: 'Westernmost residential area with ocean views and quiet streets.',
    coordinates: { lat: 37.7700, lng: -122.4900 },
    area: 'Western',
    characteristics: ['Residential', 'Ocean Views', 'Quiet', 'Family-friendly'],
    avgRating: 4.1,
    reviewCount: 24,
    status: 'good'
  },
  {
    id: 'inner-richmond',
    name: 'Inner Richmond',
    slug: 'inner-richmond',
    description: 'Residential area with restaurants, shops, and Golden Gate Park access.',
    coordinates: { lat: 37.7800, lng: -122.4600 },
    area: 'Western',
    characteristics: ['Residential', 'Restaurants', 'Shops', 'Golden Gate Park'],
    avgRating: 3.9,
    reviewCount: 38,
    status: 'good'
  },

  // Southern Neighborhoods
  {
    id: 'excelsior',
    name: 'Excelsior',
    slug: 'excelsior',
    description: 'Diverse residential neighborhood with community feel.',
    coordinates: { lat: 37.7200, lng: -122.4300 },
    area: 'Southern',
    characteristics: ['Diverse', 'Residential', 'Community', 'Family-friendly'],
    avgRating: 3.4,
    reviewCount: 28,
    status: 'average'
  },
  {
    id: 'ingleside',
    name: 'Ingleside',
    slug: 'ingleside',
    description: 'Residential neighborhood near San Francisco State University.',
    coordinates: { lat: 37.7200, lng: -122.4500 },
    area: 'Southern',
    characteristics: ['Residential', 'University', 'Family-friendly', 'Quiet'],
    avgRating: 3.3,
    reviewCount: 19,
    status: 'average'
  },
  {
    id: 'oceanview',
    name: 'Oceanview',
    slug: 'oceanview',
    description: 'Residential neighborhood with diverse population.',
    coordinates: { lat: 37.7100, lng: -122.4600 },
    area: 'Southern',
    characteristics: ['Residential', 'Diverse', 'Family-friendly', 'Quiet'],
    avgRating: 3.2,
    reviewCount: 15,
    status: 'average'
  },
  {
    id: 'merced-heights',
    name: 'Merced Heights',
    slug: 'merced-heights',
    description: 'Residential area with ocean views and family homes.',
    coordinates: { lat: 37.7100, lng: -122.4700 },
    area: 'Southern',
    characteristics: ['Residential', 'Ocean Views', 'Family Homes', 'Quiet'],
    avgRating: 3.5,
    reviewCount: 12,
    status: 'average'
  },
  {
    id: 'lakeshore',
    name: 'Lakeshore',
    slug: 'lakeshore',
    description: 'Residential neighborhood near Lake Merced.',
    coordinates: { lat: 37.7200, lng: -122.4800 },
    area: 'Southern',
    characteristics: ['Residential', 'Lake Merced', 'Family-friendly', 'Quiet'],
    avgRating: 3.6,
    reviewCount: 18,
    status: 'average'
  },

  // Bayview/Hunters Point
  {
    id: 'bayview-hunters-point',
    name: 'Bayview-Hunters Point',
    slug: 'bayview-hunters-point',
    description: 'Industrial and residential area with waterfront access.',
    coordinates: { lat: 37.7300, lng: -122.3800 },
    area: 'Bayview',
    characteristics: ['Industrial', 'Waterfront', 'Residential', 'Historic'],
    avgRating: 2.8,
    reviewCount: 34,
    status: 'poor'
  },

  // Treasure Island
  {
    id: 'treasure-island',
    name: 'Treasure Island',
    slug: 'treasure-island',
    description: 'Artificial island with bay views and planned development.',
    coordinates: { lat: 37.8250, lng: -122.3700 },
    area: 'Islands',
    characteristics: ['Island', 'Bay Views', 'Development', 'Waterfront'],
    avgRating: 3.1,
    reviewCount: 8,
    status: 'average'
  },

  // Presidio
  {
    id: 'presidio',
    name: 'Presidio',
    slug: 'presidio',
    description: 'Former military base now a national park with trails and museums.',
    coordinates: { lat: 37.8000, lng: -122.4600 },
    area: 'Presidio',
    characteristics: ['National Park', 'Trails', 'Museums', 'Historic'],
    avgRating: 4.4,
    reviewCount: 67,
    status: 'good'
  },

  // Golden Gate Park
  {
    id: 'golden-gate-park',
    name: 'Golden Gate Park',
    slug: 'golden-gate-park',
    description: 'Massive urban park with museums, gardens, and recreational facilities.',
    coordinates: { lat: 37.7690, lng: -122.4830 },
    area: 'Parks',
    characteristics: ['Park', 'Museums', 'Gardens', 'Recreation'],
    avgRating: 4.5,
    reviewCount: 124,
    status: 'good'
  },

  // Fisherman's Wharf
  {
    id: 'fishermans-wharf',
    name: 'Fisherman\'s Wharf',
    slug: 'fishermans-wharf',
    description: 'Tourist destination with seafood restaurants and waterfront attractions.',
    coordinates: { lat: 37.8080, lng: -122.4150 },
    area: 'Waterfront',
    characteristics: ['Tourist', 'Seafood', 'Waterfront', 'Attractions'],
    avgRating: 3.0,
    reviewCount: 156,
    status: 'average'
  },

  // Embarcadero
  {
    id: 'embarcadero',
    name: 'Embarcadero',
    slug: 'embarcadero',
    description: 'Waterfront area with piers, restaurants, and bay views.',
    coordinates: { lat: 37.7950, lng: -122.3950 },
    area: 'Waterfront',
    characteristics: ['Waterfront', 'Piers', 'Restaurants', 'Bay Views'],
    avgRating: 3.8,
    reviewCount: 89,
    status: 'average'
  },

  // Additional neighborhoods to reach 45 total
  {
    id: 'twin-peaks',
    name: 'Twin Peaks',
    slug: 'twin-peaks',
    description: 'Residential neighborhood with panoramic city views and hiking trails.',
    coordinates: { lat: 37.7500, lng: -122.4500 },
    area: 'Central',
    characteristics: ['Residential', 'Views', 'Hiking', 'Quiet'],
    avgRating: 4.0,
    reviewCount: 23,
    status: 'good'
  },
  {
    id: 'diamond-heights',
    name: 'Diamond Heights',
    slug: 'diamond-heights',
    description: 'Residential neighborhood with hillside views and community parks.',
    coordinates: { lat: 37.7400, lng: -122.4400 },
    area: 'Central',
    characteristics: ['Residential', 'Hills', 'Views', 'Parks'],
    avgRating: 3.7,
    reviewCount: 16,
    status: 'average'
  },
  {
    id: 'forest-hill',
    name: 'Forest Hill',
    slug: 'forest-hill',
    description: 'Upscale residential neighborhood with tree-lined streets and parks.',
    coordinates: { lat: 37.7300, lng: -122.4600 },
    area: 'Western',
    characteristics: ['Upscale', 'Residential', 'Trees', 'Parks'],
    avgRating: 4.1,
    reviewCount: 19,
    status: 'good'
  },
  {
    id: 'st-francis-wood',
    name: 'St. Francis Wood',
    slug: 'st-francis-wood',
    description: 'Affluent residential neighborhood with Spanish architecture and gardens.',
    coordinates: { lat: 37.7300, lng: -122.4700 },
    area: 'Western',
    characteristics: ['Affluent', 'Residential', 'Spanish Architecture', 'Gardens'],
    avgRating: 4.2,
    reviewCount: 14,
    status: 'good'
  },
  {
    id: 'west-portal',
    name: 'West Portal',
    slug: 'west-portal',
    description: 'Residential neighborhood with shopping district and Muni Metro access.',
    coordinates: { lat: 37.7400, lng: -122.4700 },
    area: 'Western',
    characteristics: ['Residential', 'Shopping', 'Transit', 'Family-friendly'],
    avgRating: 3.8,
    reviewCount: 27,
    status: 'average'
  },
  {
    id: 'sunnyside',
    name: 'Sunnyside',
    slug: 'sunnyside',
    description: 'Residential neighborhood with community feel and family homes.',
    coordinates: { lat: 37.7300, lng: -122.4500 },
    area: 'Southern',
    characteristics: ['Residential', 'Community', 'Family-friendly', 'Quiet'],
    avgRating: 3.6,
    reviewCount: 21,
    status: 'average'
  }
]

// Helper function to get neighborhood by slug
export const getNeighborhoodBySlug = (slug: string): SFNeighborhood | undefined => {
  return sfNeighborhoods.find(neighborhood => neighborhood.slug === slug)
}

// Helper function to get neighborhoods by area
export const getNeighborhoodsByArea = (area: string): SFNeighborhood[] => {
  return sfNeighborhoods.filter(neighborhood => neighborhood.area === area)
}

// Helper function to search neighborhoods
export const searchNeighborhoods = (query: string): SFNeighborhood[] => {
  const lowercaseQuery = query.toLowerCase()
  return sfNeighborhoods.filter(neighborhood => 
    neighborhood.name.toLowerCase().includes(lowercaseQuery) ||
    neighborhood.description.toLowerCase().includes(lowercaseQuery) ||
    neighborhood.characteristics.some(char => char.toLowerCase().includes(lowercaseQuery))
  )
} 