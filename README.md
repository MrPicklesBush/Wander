# Wander / RateMyHood 🌍

A community-powered platform for exploring, evaluating, and sharing feedback on San Francisco neighborhoods using honest reviews, ratings, and real-time map insights.

**Tagline:** "Wander where locals lead."

## 🚀 Features

### Core Pages
- **Home Page** (`/`) - Entry point with search and interactive map
- **Browse Neighborhoods** (`/neighborhoods`) - List and map view of all SF neighborhoods
- **Neighborhood Profile** (`/neighborhood/[slug]`) - Detailed neighborhood information and reviews
- **Write a Review** (`/write`) - Submit structured feedback for neighborhoods

### Key Components
- **Interactive Search** - Autocomplete neighborhood search
- **Star Rating System** - 1-5 star ratings with visual feedback
- **Tag System** - Pre-defined and custom tags for neighborhood characteristics
- **Responsive Design** - Works great on desktop and mobile
- **Clean UI** - Minimalist design with large spacing and clean typography

### Color-Coded Status System
- 🟢 **Green** = Good (4.0+ rating)
- 🟡 **Yellow** = Average (3.0-3.9 rating)
- 🔴 **Red** = Poor (<3.0 rating)

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Map:** Placeholder (Leaflet.js/Mapbox integration coming soon)
- **Deployment:** Vercel-ready

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
wander-ratemyhood/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── neighborhoods/     # Browse neighborhoods
│   ├── neighborhood/      # Individual neighborhood pages
│   └── write/            # Write review page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── SearchBar.tsx      # Search component
│   ├── MapPlaceholder.tsx # Map placeholder
│   ├── NeighborhoodCard.tsx # Neighborhood card
│   └── ReviewCard.tsx     # Review display
└── package.json          # Dependencies
```

## 🎨 UI Components

### Navigation
- Logo and navigation links
- Active state highlighting
- Responsive design

### Search Bar
- Autocomplete functionality
- Search icon
- Focus states

### Neighborhood Cards
- Star ratings
- Status badges (Good/Average/Poor)
- Review counts
- Hover effects

### Review Form
- Interactive star rating
- Character counter
- Tag selection
- Custom tag creation

## 🔮 Future Enhancements

### Map Integration
- Interactive Leaflet.js or Mapbox map
- Color-coded neighborhood boundaries
- Clickable zones with popups
- Mobile-friendly interactions

### Backend Features
- User authentication
- Review submission and storage
- Real-time data updates
- Image upload support

### Additional Features
- Anonymous review option
- Review filtering and sorting
- Neighborhood comparison
- User profiles and history

## 🎯 User Experience Highlights

- **Fully Responsive** - Optimized for all devices
- **Accessible** - WCAG compliant forms and controls
- **Fast Loading** - Optimized performance
- **Intuitive Navigation** - Clear user flow
- **Visual Feedback** - Interactive elements with hover states

## 📱 Mobile-First Design

The application is built with a mobile-first approach, ensuring optimal experience across all devices:

- Touch-friendly buttons and interactions
- Responsive grid layouts
- Optimized typography for readability
- Efficient use of screen real estate

## 🚀 Deployment

Ready for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**Built with ❤️ for the San Francisco community** 