'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import SearchSection from '@/components/SearchSection'
import Gallery from '@/components/Gallery'
import Modal from '@/components/Modal'
import FavoritesToggle from '@/components/FavoritesToggle'
import ThemeToggle from '@/components/ThemeToggle'

interface APODItem {
  date: string
  title: string
  explanation: string
  url: string
  hdurl?: string
  media_type: string
}

export default function Home() {
  const [items, setItems] = useState<APODItem[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedItem, setSelectedItem] = useState<APODItem | null>(null)
  const [favorites, setFavorites] = useState<APODItem[]>([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY

  const fetchAPOD = async (startDate?: string, endDate?: string) => {
    setLoading(true)

    try {
      let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

      if (startDate && endDate) {
        url += `&start_date=${startDate}&end_date=${endDate}`
      } else {
        const today = new Date().toISOString().split('T')[0]
        url += `&date=${today}`
      }

      const res = await fetch(url)
      const data = await res.json()

      let result: APODItem[] = Array.isArray(data) ? data : [data]

      result = result.filter((item) => item.media_type === 'image')

      setItems(result.reverse())
    } catch (error) {
      console.error('Error fetching data:', error)
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAPOD()

    const savedFavorites = localStorage.getItem('favorites')

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (item: APODItem) => {
    const exists = favorites.find((f) => f.date === item.date)

    if (exists) {
      setFavorites(favorites.filter((f) => f.date !== item.date))
    } else {
      setFavorites([...favorites, item])
    }
  }

  const isFavorited = (item: APODItem) => {
    return favorites.some((f) => f.date === item.date)
  }

  const displayItems = showFavorites ? favorites : items

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020617] text-white">


      <Header />

      {/* Theme Toggle */}
      <div className="fixed top-5 right-5 z-50 flex gap-3">
        <ThemeToggle theme={theme} onThemeChange={setTheme} />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-10 max-w-7xl">

        {/* Hero Section */}
        <div className="text-center mb-14">

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            NASA APOD Explorer
          </h1>

          <p className="text-slate-300 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover breathtaking astronomy pictures from NASA and explore the beauty of the universe one day at a time.
          </p>

        </div>

        {/* Search */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
          <SearchSection onSearch={fetchAPOD} />
        </div>

        {/* Favorites Toggle */}
        <div className="mt-8 flex justify-end">
          <FavoritesToggle
            showFavorites={showFavorites}
            onToggle={() => setShowFavorites(!showFavorites)}
            favoriteCount={favorites.length}
          />
        </div>

        {/* Gallery */}
        <div className="mt-10">

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="h-[350px] rounded-3xl bg-white/10 animate-pulse"
                ></div>
              ))}

            </div>
          ) : displayItems.length > 0 ? (

            <Gallery
              items={displayItems}
              onSelectItem={setSelectedItem}
              onToggleFavorite={toggleFavorite}
              favoriteItems={favorites}
            />

          ) : (

            <div className="text-center mt-16">

              <h2 className="text-2xl font-semibold text-slate-300">
                No Images Found
              </h2>

              <p className="text-slate-500 mt-3">
                Try searching another date range.
              </p>

            </div>

          )}
        </div>
      </main>

      {/* Modal */}
      {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onToggleFavorite={toggleFavorite}
          isFavorited={isFavorited(selectedItem)}
        />
      )}
    </div>
  )
}