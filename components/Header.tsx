import {
  Rocket,
  Sparkles,
  Stars
} from 'lucide-react'

export default function Header() {

  return (

    <header
      className="
        relative
        overflow-hidden
        border-b
        border-white/10
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-blue-500/5
          via-purple-500/5
          to-transparent
          pointer-events-none
        "
      ></div>

      {/* Floating Blur Circles */}
      <div
        className="
          absolute
          top-10
          left-10
          w-72
          h-72
          bg-blue-500/10
          blur-3xl
          rounded-full
        "
      ></div>

      <div
        className="
          absolute
          top-0
          right-0
          w-72
          h-72
          bg-purple-500/10
          blur-3xl
          rounded-full
        "
      ></div>

      {/* Tiny Stars */}
      <div className="starfield absolute inset-0"></div>

      {/* Main Content */}
      <div
        className="
          container
          mx-auto
          px-4
          py-24
          relative
          z-10
          max-w-7xl
        "
      >

        <div className="text-center">

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-5
              py-2.5

              rounded-full

              border
              border-white/10

              bg-white/5

              backdrop-blur-md

              mb-8
            "
          >

            <Sparkles className="w-4 h-4 text-purple-300" />

            <p className="text-sm text-slate-300 tracking-wide">
              Powered by NASA Astronomy Picture of the Day API
            </p>

          </div>

          {/* Main Title */}
          <div className="space-y-6">

            <div
              className="
                flex
                justify-center
                items-center
                gap-4
                mb-2
              "
            >

              <Rocket className="w-10 h-10 text-blue-400 floating" />

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  xl:text-8xl

                  font-black

                  leading-tight

                  bg-gradient-to-r
                  from-blue-400
                  via-purple-400
                  to-pink-400

                  bg-clip-text
                  text-transparent
                "
              >
                NASA APOD
              </h1>

              <Stars className="w-10 h-10 text-pink-400 floating" />

            </div>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-white
              "
            >
              Astronomy Picture Explorer
            </h2>

          </div>

          {/* Subtitle */}
          <p
            className="
              mt-8

              text-lg
              md:text-xl

              text-slate-300

              max-w-3xl
              mx-auto

              leading-relaxed
            "
          >
            Explore breathtaking images of the universe,
            discover cosmic wonders, and experience NASA’s
            Astronomy Picture of the Day in a cinematic
            interactive gallery.
          </p>

          {/* Stats / Features */}
          <div
            className="
              mt-12

              flex
              flex-wrap
              justify-center

              gap-5
            "
          >

            {/* Card 1 */}
            <div
              className="
                glassmorphism

                px-6
                py-4

                rounded-2xl

                min-w-[180px]
              "
            >

              <p className="text-3xl font-bold gradient-text">
                ∞
              </p>

              <p className="text-sm text-slate-400 mt-1">
                Cosmic Discoveries
              </p>

            </div>

            {/* Card 2 */}
            <div
              className="
                glassmorphism

                px-6
                py-4

                rounded-2xl

                min-w-[180px]
              "
            >

              <p className="text-3xl font-bold gradient-text">
                HD
              </p>

              <p className="text-sm text-slate-400 mt-1">
                NASA Space Imagery
              </p>

            </div>

            {/* Card 3 */}
            <div
              className="
                glassmorphism

                px-6
                py-4

                rounded-2xl

                min-w-[180px]
              "
            >

              <p className="text-3xl font-bold gradient-text">
                Daily
              </p>

              <p className="text-sm text-slate-400 mt-1">
                Astronomy Updates
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-24
          bg-gradient-to-t
          from-[#020617]
          to-transparent
          pointer-events-none
        "
      ></div>

    </header>
  )
}