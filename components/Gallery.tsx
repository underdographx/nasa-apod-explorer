'use client'

import { Heart, Expand } from 'lucide-react'

interface APODItem {
  date: string
  title: string
  explanation: string
  url: string
  hdurl?: string
  media_type: string
}

interface GalleryProps {
  items: APODItem[]
  onSelectItem: (item: APODItem) => void
  onToggleFavorite: (item: APODItem) => void
  favoriteItems: APODItem[]
}

export default function Gallery({
  items,
  onSelectItem,
  onToggleFavorite,
  favoriteItems
}: GalleryProps) {

  const isFavorited = (item: APODItem) => {
    return favoriteItems.some((f) => f.date === item.date)
  }

  return (

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {items.map((item, index) => (

        <div
          key={item.date}
          className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            glassmorphism
            card-hover
            space-glow
            fade-in
          "
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >

          {/* Image Container */}
          <div
            onClick={() => onSelectItem(item)}
            className="
              relative
              h-[320px]
              overflow-hidden
              cursor-pointer
            "
          >

            {/* Image */}
            <img
              src={item.url}
              alt={item.title}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
              "
            ></div>

            {/* Floating View Icon */}
            <div
              className="
                absolute
                top-5
                right-5
                w-11
                h-11
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                flex
                items-center
                justify-center
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-300
              "
            >
              <Expand className="w-5 h-5 text-white" />
            </div>

            {/* Date Badge */}
            <div
              className="
                absolute
                top-5
                left-5
                px-4
                py-1.5
                rounded-full
                text-xs
                font-semibold
                bg-gradient-to-r
                from-blue-500/80
                to-purple-500/80
                backdrop-blur-md
                text-white
                border
                border-white/10
                shadow-lg
              "
            >
              {new Date(item.date).toLocaleDateString(
                'en-US',
                {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                }
              )}
            </div>

            {/* Bottom Text Overlay */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                  text-white
                  leading-tight
                  line-clamp-2
                "
              >
                {item.title}
              </h2>

            </div>
          </div>

          {/* Content */}
          <div className="p-6">

            {/* Description */}
            <p
              className="
                text-sm
                leading-relaxed
                text-slate-300
                line-clamp-3
              "
            >
              {item.explanation}
            </p>

            {/* Divider */}
            <div
              className="
                my-5
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            ></div>

            {/* Fun Fact */}
            <div
              className="
                rounded-2xl
                bg-white/5
                border
                border-white/5
                p-4
                backdrop-blur-sm
              "
            >

              <p className="text-xs uppercase tracking-widest text-purple-300 mb-2">
                Cosmic Insight
              </p>

              <p
                className="
                  text-sm
                  text-slate-300
                  leading-relaxed
                "
              >
                🌌 {
                  item.explanation
                    .split('.')[0]
                    ?.substring(0, 110)
                }...
              </p>

            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">

              {/* View Button */}
              <button
                onClick={() => onSelectItem(item)}
                className="
                  flex-1
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  text-white
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-purple-500/20
                "
              >
                Explore
              </button>

              {/* Favorite Button */}
              <button
                onClick={() => onToggleFavorite(item)}
                className={`
                  w-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  border
                  transition-all
                  duration-300

                  ${
                    isFavorited(item)
                      ? `
                        bg-pink-500/20
                        border-pink-500/30
                        text-pink-400
                        shadow-lg
                        shadow-pink-500/20
                      `
                      : `
                        bg-white/5
                        border-white/10
                        text-white
                        hover:bg-white/10
                      `
                  }
                `}
              >

                <Heart
                  className={`
                    w-5
                    h-5
                    ${isFavorited(item) ? 'fill-current' : ''}
                  `}
                />

              </button>

            </div>
          </div>

          {/* Glow Border */}
          <div
            className="
              absolute
              inset-0
              rounded-[28px]
              border
              border-white/5
              pointer-events-none
            "
          ></div>

        </div>
      ))}
    </div>
  )
}