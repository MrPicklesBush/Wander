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
  {
    id: 'bayview',
    name: 'Bayview',
    slug: 'bayview',
    description: 'Diverse neighborhood with industrial history and community pride.',
    coordinates: { lat: 37.7300, lng: -122.3800 },
    area: 'Southeast',
    characteristics: ['Diverse', 'Industrial', 'Community', 'History'],
    avgRating: 3.3,
    reviewCount: 41,
    status: 'average'
  },
  {
    id: 'bernal-heights',
    name: 'Bernal Heights',
    slug: 'bernal-heights',
    description: 'Hilly neighborhood with great views, parks, and community feel.',
    coordinates: { lat: 37.7400, lng: -122.4200 },
    area: 'South',
    characteristics: ['Hilly', 'Views', 'Parks', 'Community'],
    avgRating: 4.1,
    reviewCount: 39,
    status: 'good'
  },
  {
    id: 'castro-upper-market',
    name: 'Castro/Upper Market',
    slug: 'castro-upper-market',
    description: 'Historic LGBTQ+ neighborhood with vibrant culture and nightlife.',
    coordinates: { lat: 37.7600, lng: -122.4350 },
    area: 'Central',
    characteristics: ['LGBTQ+', 'Historic', 'Vibrant', 'Nightlife'],
    avgRating: 4.2,
    reviewCount: 56,
    status: 'good'
  },
  {
    id: 'chinatown',
    name: 'Chinatown',
    slug: 'chinatown',
    description: 'Historic Chinese neighborhood with authentic restaurants and cultural heritage.',
    coordinates: { lat: 37.7940, lng: -122.4070 },
    area: 'North',
    characteristics: ['Chinese', 'Historic', 'Cultural', 'Food'],
    avgRating: 3.8,
    reviewCount: 67,
    status: 'good'
  },
  {
    id: 'crocker-amazon',
    name: 'Crocker Amazon',
    slug: 'crocker-amazon',
    description: 'Residential neighborhood with parks and family-friendly atmosphere.',
    coordinates: { lat: 37.7100, lng: -122.4300 },
    area: 'South',
    characteristics: ['Residential', 'Parks', 'Family', 'Quiet'],
    avgRating: 3.5,
    reviewCount: 28,
    status: 'average'
  },
  {
    id: 'diamond-heights',
    name: 'Diamond Heights',
    slug: 'diamond-heights',
    description: 'Hilly residential neighborhood with views and community feel.',
    coordinates: { lat: 37.7400, lng: -122.4500 },
    area: 'South',
    characteristics: ['Hilly', 'Views', 'Residential', 'Community'],
    avgRating: 3.9,
    reviewCount: 34,
    status: 'good'
  },
  {
    id: 'downtown-civic-center',
    name: 'Downtown/Civic Center',
    slug: 'downtown-civic-center',
    description: 'Government and cultural district with City Hall, museums, and performing arts venues.',
    coordinates: { lat: 37.7793, lng: -122.4173 },
    area: 'Downtown',
    characteristics: ['Government', 'Cultural', 'Transit Hub', 'Historic'],
    avgRating: 3.2,
    reviewCount: 45,
    status: 'average'
  },
  {
    id: 'excelsior',
    name: 'Excelsior',
    slug: 'excelsior',
    description: 'Family-oriented neighborhood with diverse culture and community events.',
    coordinates: { lat: 37.7200, lng: -122.4200 },
    area: 'South',
    characteristics: ['Family', 'Diverse', 'Community', 'Residential'],
    avgRating: 3.8,
    reviewCount: 35,
    status: 'good'
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
  {
    id: 'glen-park',
    name: 'Glen Park',
    slug: 'glen-park',
    description: 'Quiet neighborhood with village feel, BART access, and canyon views.',
    coordinates: { lat: 37.7300, lng: -122.4300 },
    area: 'South',
    characteristics: ['Quiet', 'Village', 'BART', 'Canyon'],
    avgRating: 4.0,
    reviewCount: 31,
    status: 'good'
  },
  {
    id: 'golden-gate-park',
    name: 'Golden Gate Park',
    slug: 'golden-gate-park',
    description: 'Large urban park with museums, gardens, and recreational facilities.',
    coordinates: { lat: 37.7690, lng: -122.4800 },
    area: 'Central',
    characteristics: ['Park', 'Museums', 'Gardens', 'Recreation'],
    avgRating: 4.5,
    reviewCount: 89,
    status: 'good'
  },
  {
    id: 'haight-ashbury',
    name: 'Haight Ashbury',
    slug: 'haight-ashbury',
    description: 'Historic hippie neighborhood with vintage shops and Golden Gate Park access.',
    coordinates: { lat: 37.7680, lng: -122.4450 },
    area: 'Central',
    characteristics: ['Historic', 'Hippie', 'Vintage', 'Park'],
    avgRating: 3.7,
    reviewCount: 52,
    status: 'average'
  },
  {
    id: 'inner-richmond',
    name: 'Inner Richmond',
    slug: 'inner-richmond',
    description: 'Eastern part of Richmond District with restaurants and Golden Gate Park.',
    coordinates: { lat: 37.7800, lng: -122.4600 },
    area: 'Northwest',
    characteristics: ['Food', 'Park', 'Eastern', 'Residential'],
    avgRating: 4.1,
    reviewCount: 51,
    status: 'good'
  },
  {
    id: 'inner-sunset',
    name: 'Inner Sunset',
    slug: 'inner-sunset',
    description: 'Eastern part of Sunset District with restaurants and Golden Gate Park.',
    coordinates: { lat: 37.7500, lng: -122.4700 },
    area: 'Southwest',
    characteristics: ['Food', 'Park', 'Eastern', 'Residential'],
    avgRating: 3.9,
    reviewCount: 48,
    status: 'good'
  },
  {
    id: 'lakeshore',
    name: 'Lakeshore',
    slug: 'lakeshore',
    description: 'Residential neighborhood with Lake Merced and golf course.',
    coordinates: { lat: 37.7200, lng: -122.4900 },
    area: 'Southwest',
    characteristics: ['Lake', 'Golf', 'Residential', 'Quiet'],
    avgRating: 3.7,
    reviewCount: 24,
    status: 'good'
  },
  {
    id: 'marina',
    name: 'Marina',
    slug: 'marina',
    description: 'Trendy neighborhood with waterfront, shopping, and nightlife.',
    coordinates: { lat: 37.8000, lng: -122.4400 },
    area: 'North',
    characteristics: ['Trendy', 'Waterfront', 'Shopping', 'Nightlife'],
    avgRating: 4.1,
    reviewCount: 49,
    status: 'good'
  },
  {
    id: 'mission',
    name: 'Mission',
    slug: 'mission',
    description: 'Vibrant neighborhood with Latino culture, murals, and diverse restaurants.',
    coordinates: { lat: 37.7600, lng: -122.4200 },
    area: 'Central',
    characteristics: ['Latino', 'Murals', 'Diverse', 'Food'],
    avgRating: 4.0,
    reviewCount: 78,
    status: 'good'
  },
  {
    id: 'nob-hill',
    name: 'Nob Hill',
    slug: 'nob-hill',
    description: 'Historic neighborhood with luxury hotels and cable cars.',
    coordinates: { lat: 37.7940, lng: -122.4150 },
    area: 'North',
    characteristics: ['Historic', 'Luxury', 'Hotels', 'Cable Cars'],
    avgRating: 4.2,
    reviewCount: 43,
    status: 'good'
  },
  {
    id: 'noe-valley',
    name: 'Noe Valley',
    slug: 'noe-valley',
    description: 'Family-friendly neighborhood with shops, restaurants, and sunny weather.',
    coordinates: { lat: 37.7500, lng: -122.4300 },
    area: 'South',
    characteristics: ['Family', 'Sunny', 'Food', 'Residential'],
    avgRating: 4.3,
    reviewCount: 48,
    status: 'good'
  },
  {
    id: 'north-beach',
    name: 'North Beach',
    slug: 'north-beach',
    description: 'Italian neighborhood known for restaurants, cafes, and historic charm.',
    coordinates: { lat: 37.8000, lng: -122.4100 },
    area: 'North',
    characteristics: ['Italian', 'Food', 'Historic', 'Walkable'],
    avgRating: 4.1,
    reviewCount: 52,
    status: 'good'
  },
  {
    id: 'ocean-view',
    name: 'Ocean View',
    slug: 'ocean-view',
    description: 'Neighborhood with ocean views and residential character.',
    coordinates: { lat: 37.7200, lng: -122.4600 },
    area: 'Southwest',
    characteristics: ['Ocean Views', 'Residential', 'Quiet', 'Family'],
    avgRating: 3.4,
    reviewCount: 25,
    status: 'average'
  },
  {
    id: 'outer-mission',
    name: 'Outer Mission',
    slug: 'outer-mission',
    description: 'Diverse neighborhood with authentic restaurants and residential areas.',
    coordinates: { lat: 37.7200, lng: -122.4400 },
    area: 'South',
    characteristics: ['Diverse', 'Authentic', 'Food', 'Residential'],
    avgRating: 3.6,
    reviewCount: 42,
    status: 'average'
  },
  {
    id: 'outer-richmond',
    name: 'Outer Richmond',
    slug: 'outer-richmond',
    description: 'Western part of Richmond District with ocean and fog.',
    coordinates: { lat: 37.7800, lng: -122.4900 },
    area: 'Northwest',
    characteristics: ['Ocean', 'Fog', 'Western', 'Residential'],
    avgRating: 3.8,
    reviewCount: 45,
    status: 'good'
  },
  {
    id: 'outer-sunset',
    name: 'Outer Sunset',
    slug: 'outer-sunset',
    description: 'Western part of Sunset District with fog and beaches.',
    coordinates: { lat: 37.7500, lng: -122.4900 },
    area: 'Southwest',
    characteristics: ['Fog', 'Beaches', 'Western', 'Residential'],
    avgRating: 3.7,
    reviewCount: 52,
    status: 'average'
  },
  {
    id: 'pacific-heights',
    name: 'Pacific Heights',
    slug: 'pacific-heights',
    description: 'Upscale neighborhood with mansions, views, and luxury homes.',
    coordinates: { lat: 37.7900, lng: -122.4400 },
    area: 'North',
    characteristics: ['Upscale', 'Mansions', 'Views', 'Luxury'],
    avgRating: 4.4,
    reviewCount: 36,
    status: 'good'
  },
  {
    id: 'parkside',
    name: 'Parkside',
    slug: 'parkside',
    description: 'Residential neighborhood near Golden Gate Park with family homes.',
    coordinates: { lat: 37.7400, lng: -122.4900 },
    area: 'Southwest',
    characteristics: ['Residential', 'Family', 'Park', 'Quiet'],
    avgRating: 3.8,
    reviewCount: 35,
    status: 'good'
  },
  {
    id: 'potrero-hill',
    name: 'Potrero Hill',
    slug: 'potrero-hill',
    description: 'Hilly neighborhood with bay views, tech companies, and residential areas.',
    coordinates: { lat: 37.7600, lng: -122.4000 },
    area: 'Central',
    characteristics: ['Hilly', 'Bay Views', 'Tech', 'Residential'],
    avgRating: 4.0,
    reviewCount: 41,
    status: 'good'
  },
  {
    id: 'presidio',
    name: 'Presidio',
    slug: 'presidio',
    description: 'Former military base turned national park with trails and historic buildings.',
    coordinates: { lat: 37.8000, lng: -122.4700 },
    area: 'Northwest',
    characteristics: ['Park', 'Historic', 'Trails', 'Military'],
    avgRating: 4.3,
    reviewCount: 67,
    status: 'good'
  },
  {
    id: 'presidio-heights',
    name: 'Presidio Heights',
    slug: 'presidio-heights',
    description: 'Exclusive neighborhood with luxury homes and Presidio access.',
    coordinates: { lat: 37.7900, lng: -122.4600 },
    area: 'Northwest',
    characteristics: ['Exclusive', 'Luxury', 'Presidio', 'Upscale'],
    avgRating: 4.3,
    reviewCount: 24,
    status: 'good'
  },
  {
    id: 'russian-hill',
    name: 'Russian Hill',
    slug: 'russian-hill',
    description: 'Upscale residential neighborhood with steep streets and Victorian homes.',
    coordinates: { lat: 37.8000, lng: -122.4200 },
    area: 'North',
    characteristics: ['Upscale', 'Residential', 'Victorian', 'Hills'],
    avgRating: 4.0,
    reviewCount: 28,
    status: 'good'
  },
  {
    id: 'seacliff',
    name: 'Seacliff',
    slug: 'seacliff',
    description: 'Exclusive neighborhood with ocean views and luxury homes.',
    coordinates: { lat: 37.7800, lng: -122.4800 },
    area: 'Northwest',
    characteristics: ['Exclusive', 'Ocean Views', 'Luxury', 'Quiet'],
    avgRating: 4.5,
    reviewCount: 18,
    status: 'good'
  },
  {
    id: 'south-of-market',
    name: 'South of Market',
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
    id: 'treasure-island-ybi',
    name: 'Treasure Island/YBI',
    slug: 'treasure-island-ybi',
    description: 'Artificial island with bay views and naval history.',
    coordinates: { lat: 37.8200, lng: -122.3700 },
    area: 'Bay',
    characteristics: ['Island', 'Bay Views', 'Naval', 'History'],
    avgRating: 3.5,
    reviewCount: 15,
    status: 'average'
  },
  {
    id: 'twin-peaks',
    name: 'Twin Peaks',
    slug: 'twin-peaks',
    description: 'Hilly neighborhood with panoramic city views and residential areas.',
    coordinates: { lat: 37.7500, lng: -122.4500 },
    area: 'Central',
    characteristics: ['Hilly', 'Views', 'Residential', 'Panoramic'],
    avgRating: 4.1,
    reviewCount: 39,
    status: 'good'
  },
  {
    id: 'visitacion-valley',
    name: 'Visitacion Valley',
    slug: 'visitacion-valley',
    description: 'Diverse neighborhood with parks and residential areas.',
    coordinates: { lat: 37.7100, lng: -122.4100 },
    area: 'Southeast',
    characteristics: ['Diverse', 'Parks', 'Residential', 'Community'],
    avgRating: 3.3,
    reviewCount: 29,
    status: 'average'
  },
  {
    id: 'west-of-twin-peaks',
    name: 'West of Twin Peaks',
    slug: 'west-of-twin-peaks',
    description: 'Residential area west of Twin Peaks with hills and views.',
    coordinates: { lat: 37.7500, lng: -122.4600 },
    area: 'Central',
    characteristics: ['Residential', 'Hills', 'Views', 'West'],
    avgRating: 3.9,
    reviewCount: 42,
    status: 'good'
  },
  {
    id: 'western-addition',
    name: 'Western Addition',
    slug: 'western-addition',
    description: 'Historic neighborhood with Victorian homes, jazz history, and diverse culture.',
    coordinates: { lat: 37.7800, lng: -122.4300 },
    area: 'Central',
    characteristics: ['Historic', 'Victorian', 'Jazz', 'Diverse'],
    avgRating: 3.8,
    reviewCount: 34,
    status: 'good'
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