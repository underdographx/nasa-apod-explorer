import {
  Moon,
  Sun,
  Stars
} from 'lucide-react'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onThemeChange: (
    theme: 'light' | 'dark'
  ) => void
}

export default function ThemeToggle({
  theme,
  onThemeChange
}: ThemeToggleProps) {

  return (

    <button
      onClick={() =>
        onThemeChange(
          theme === 'dark'
            ? 'light'
            : 'dark'
        )
      }

      className="
        group

        relative

        flex
        items-center
        justify-center

        w-14
        h-14

        rounded-2xl

        border
        border-white/10

        bg-white/5

        backdrop-blur-xl

        overflow-hidden

        transition-all
        duration-500

        hover:scale-110
        hover:bg-white/10

        shadow-xl
        shadow-purple-500/10
      "

      aria-label={`
        Switch to
        ${theme === 'dark'
          ? 'light'
          : 'dark'
        }
        mode
      `}
    >

      {/* Glow Background */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-blue-500/10
          via-purple-500/10
          to-pink-500/10

          opacity-0
          group-hover:opacity-100

          transition-opacity
          duration-500
        "
      ></div>

      {/* Floating Small Glow */}
      <div
        className="
          absolute
          w-8
          h-8

          rounded-full

          bg-purple-500/20

          blur-xl

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-500
        "
      ></div>

      {/* Icon */}
      <div className="relative z-10">

        {theme === 'dark' ? (

          <div className="relative">

            <Sun
              className="
                w-6
                h-6

                text-yellow-300

                transition-transform
                duration-500

                group-hover:rotate-180
              "
            />

          </div>

        ) : (

          <div className="relative">

            <Moon
              className="
                w-6
                h-6

                text-blue-300

                transition-transform
                duration-500

                group-hover:-rotate-12
              "
            />

            <Stars
              className="
                absolute
                -top-2
                -right-2

                w-3
                h-3

                text-purple-300

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-500
              "
            />

          </div>

        )}

      </div>

    </button>
  )
}