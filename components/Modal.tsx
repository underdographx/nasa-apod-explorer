'use client'

import { useEffect } from 'react'
import {
  X,
  Heart,
  Download,
  Calendar,
  Sparkles
} from 'lucide-react'

interface APODItem {
  date: string
  title: string
  explanation: string
  url: string
  hdurl?: string
  media_type: string
  copyright?: string
}

interface ModalProps {
  item: APODItem
  onClose: () => void
  onToggleFavorite: (item: APODItem) => void
  isFavorited: boolean
}

export default function Modal({
  item,
  onClose,
  onToggleFavorite,
  isFavorited
}: ModalProps) {

  useEffect(() => {

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }

  }, [onClose])

  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-4
        bg-black/80
        backdrop-blur-xl
        animate-in
        fade-in
        duration-300
      "
    >

      {/* Modal Container */}
      <div
        className="
          relative
          w-full
          max-w-6xl
          max-h-[92vh]
          overflow-y-auto
          rounded-[32px]
          border
          border-white/10
          bg-[#07111f]/95
          backdrop-blur-2xl
          shadow-2xl
        "
      >

        {/* Glow Effect */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-full
            pointer-events-none
            rounded-[32px]
            bg-gradient-to-br
            from-blue-500/5
            via-purple-500/5
            to-pink-500/5
          "
        ></div>

        {/* Header */}
        <div
          className="
            sticky
            top-0
            z-20
            flex
            items-center
            justify-between
            p-6
            border-b
            border-white/10
            backdrop-blur-xl
            bg-[#07111f]/80
          "
        >

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-2">
              NASA Astronomy Picture
            </p>

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-white
                leading-tight
                max-w-3xl
              "
            >
              {item.title}
            </h2>

          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="
              w-12
              h-12
              rounded-full
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden">

          <img
            src={item.hdurl || item.url}
            alt={item.title}
            className="
              w-full
              max-h-[600px]
              object-cover
            "
          />

          {/* Gradient Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#07111f]
              via-transparent
              to-transparent
            "
          ></div>

        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-10 space-y-8">

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* Date */}
            <div
              className="
                glassmorphism
                p-5
                rounded-3xl
              "
            >

              <div className="flex items-center gap-3 mb-3">

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-blue-500/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Calendar className="w-5 h-5 text-blue-300" />
                </div>

                <p className="text-sm uppercase tracking-widest text-slate-400">
                  Captured On
                </p>

              </div>

              <h3 className="text-lg font-semibold text-white">
                {new Date(item.date).toLocaleDateString(
                  'en-US',
                  {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                )}
              </h3>

            </div>

            {/* Credit */}
            <div
              className="
                glassmorphism
                p-5
                rounded-3xl
              "
            >

              <div className="flex items-center gap-3 mb-3">

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-purple-500/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Sparkles className="w-5 h-5 text-purple-300" />
                </div>

                <p className="text-sm uppercase tracking-widest text-slate-400">
                  Image Credit
                </p>

              </div>

              <h3 className="text-lg font-semibold text-white">
                {item.copyright || 'NASA'}
              </h3>

            </div>

          </div>

          {/* Description */}
          <div className="space-y-4">

            <h3
              className="
                text-2xl
                font-bold
                gradient-text
              "
            >
              About This Image
            </h3>

            <p
              className="
                text-slate-300
                leading-8
                text-[15px]
                whitespace-pre-wrap
              "
            >
              {item.explanation}
            </p>

          </div>

          {/* Cosmic Insight */}
          <div
            className="
              rounded-[28px]
              p-6
              bg-gradient-to-r
              from-blue-500/10
              via-purple-500/10
              to-pink-500/10
              border
              border-white/10
              backdrop-blur-xl
            "
          >

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-xs
                text-pink-300
                mb-3
              "
            >
              Cosmic Insight
            </p>

            <p
              className="
                text-lg
                text-slate-200
                leading-relaxed
              "
            >
              🌌 {item.explanation.split('.')[0]}.
            </p>

          </div>

          {/* Actions */}
          <div
            className="
              flex
              flex-wrap
              gap-4
              pt-4
            "
          >

            {/* Favorite */}
            <button
              onClick={() => onToggleFavorite(item)}
              className={`
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                hover:scale-[1.03]

                ${
                  isFavorited
                    ? `
                      bg-pink-500/20
                      border
                      border-pink-500/20
                      text-pink-300
                      shadow-lg
                      shadow-pink-500/20
                    `
                    : `
                      bg-gradient-to-r
                      from-blue-500
                      to-purple-500
                      text-white
                      shadow-lg
                      shadow-purple-500/20
                    `
                }
              `}
            >

              <Heart
                className={`
                  w-5
                  h-5
                  ${isFavorited ? 'fill-current' : ''}
                `}
              />

              {isFavorited
                ? 'Saved to Favorites'
                : 'Add to Favorites'
              }

            </button>

            {/* Download */}
            <a
              href={item.hdurl || item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-2xl
                font-semibold
                bg-white/5
                border
                border-white/10
                text-white
                hover:bg-white/10
                transition-all
                duration-300
              "
            >

              <Download className="w-5 h-5" />

              View HD Image

            </a>

          </div>

        </div>
      </div>
    </div>
  )
}