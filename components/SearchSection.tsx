'use client'

import { useState, useEffect } from 'react'
import {
  Search,
  Calendar,
  Sparkles
} from 'lucide-react'

interface SearchSectionProps {
  onSearch: (startDate?: string, endDate?: string) => void
}

export default function SearchSection({
  onSearch
}: SearchSectionProps) {

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [error, setError] = useState('')
  const [maxDate, setMaxDate] = useState('')

  useEffect(() => {
    const today = new Date()
      .toISOString()
      .split('T')[0]

    setMaxDate(today)
  }, [])

  const handleSearch = () => {

    if (!startDate || !endDate) {
      setError('Please select both dates')
      return
    }

    if (startDate > endDate) {
      setError('Start date must be before end date')
      return
    }

    setError('')
    onSearch(startDate, endDate)
  }

  const handleTodaySearch = () => {

    const today = maxDate

    setStartDate(today)
    setEndDate(today)

    onSearch(today, today)

    setError('')
  }

  return (

    <div className="space-y-8">

      {/* Heading */}
      <div className="text-center">

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-white/5
            border
            border-white/10
            backdrop-blur-md
            mb-5
          "
        >

          <Sparkles className="w-4 h-4 text-purple-300" />

          <p className="text-sm text-slate-300">
            Explore the Cosmos
          </p>

        </div>

        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            gradient-text
          "
        >
          Search Astronomy Pictures
        </h2>

        <p
          className="
            text-slate-400
            mt-4
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Select a date range and uncover breathtaking
          astronomy images captured by NASA across time.
        </p>

      </div>

      {/* Search Card */}
      <div
        className="
          glassmorphism
          rounded-[32px]
          p-6
          md:p-8
        "
      >

        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Start Date */}
          <div className="space-y-3">

            <label
              className="
                text-sm
                uppercase
                tracking-widest
                text-slate-400
                flex
                items-center
                gap-2
              "
            >

              <Calendar className="w-4 h-4" />

              Start Date

            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) =>
                setStartDate(e.target.value)
              }
              max={maxDate}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                text-white
                outline-none
                backdrop-blur-md
                transition-all
                duration-300

                focus:border-purple-400
                focus:ring-2
                focus:ring-purple-500/20
              "
            />

          </div>

          {/* End Date */}
          <div className="space-y-3">

            <label
              className="
                text-sm
                uppercase
                tracking-widest
                text-slate-400
                flex
                items-center
                gap-2
              "
            >

              <Calendar className="w-4 h-4" />

              End Date

            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) =>
                setEndDate(e.target.value)
              }
              max={maxDate}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                text-white
                outline-none
                backdrop-blur-md
                transition-all
                duration-300

                focus:border-blue-400
                focus:ring-2
                focus:ring-blue-500/20
              "
            />

          </div>

        </div>

        {/* Error */}
        {error && (

          <div
            className="
              mt-5
              rounded-2xl
              border
              border-red-500/20
              bg-red-500/10
              px-5
              py-4
            "
          >

            <p className="text-red-300 text-sm">
              {error}
            </p>

          </div>

        )}

        {/* Buttons */}
        <div
          className="
            flex
            flex-wrap
            gap-4
            mt-8
          "
        >

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="
              flex
              items-center
              justify-center
              gap-3

              px-8
              py-4

              rounded-2xl

              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500

              text-white
              font-semibold

              hover:scale-[1.02]

              transition-all
              duration-300

              shadow-xl
              shadow-purple-500/20
            "
          >

            <Search className="w-5 h-5" />

            Search Universe

          </button>

          {/* Today Button */}
          <button
            onClick={handleTodaySearch}
            className="
              px-8
              py-4

              rounded-2xl

              bg-white/5
              border
              border-white/10

              text-white
              font-semibold

              hover:bg-white/10

              transition-all
              duration-300
            "
          >

            Today's APOD

          </button>

        </div>

      </div>
    </div>
  )
}