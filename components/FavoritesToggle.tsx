import {
  Heart,
  Sparkles
} from 'lucide-react'

interface FavoritesToggleProps {
  showFavorites: boolean
  onToggle: () => void
  favoriteCount: number
}

export default function FavoritesToggle({
  showFavorites,
  onToggle,
  favoriteCount
}: FavoritesToggleProps) {

  return (

    <button
      onClick={onToggle}

      className={`
        group

        relative

        flex
        items-center
        justify-center
        gap-3

        px-6
        py-4

        rounded-2xl

        border

        overflow-hidden

        backdrop-blur-xl

        transition-all
        duration-500

        hover:scale-[1.03]

        ${
          showFavorites
            ? `
              bg-gradient-to-r
              from-pink-500/20
              via-rose-500/20
              to-red-500/20

              border-pink-500/20

              text-pink-300

              shadow-xl
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

      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-pink-500/5
          via-purple-500/5
          to-blue-500/5

          opacity-0
          group-hover:opacity-100

          transition-opacity
          duration-500
        "
      ></div>

      {/* Heart Icon */}
      <div className="relative z-10 flex items-center gap-3">

        <div className="relative">

          <Heart
            className={`
              w-5
              h-5

              transition-all
              duration-300

              ${
                showFavorites
                  ? 'fill-current scale-110'
                  : ''
              }
            `}
          />

          {showFavorites && (

            <Sparkles
              className="
                absolute
                -top-2
                -right-2

                w-3
                h-3

                text-pink-300

                animate-pulse
              "
            />

          )}

        </div>

        {/* Text */}
        <div className="flex flex-col items-start">

          <span
            className="
              text-sm
              font-semibold
              leading-none
            "
          >
            {showFavorites
              ? 'Viewing Favorites'
              : 'Favorites Collection'
            }
          </span>

          <span
            className="
              text-xs
              text-slate-400
              mt-1
            "
          >
            {favoriteCount} saved image
            {favoriteCount !== 1 ? 's' : ''}
          </span>

        </div>

      </div>

    </button>
  )
}