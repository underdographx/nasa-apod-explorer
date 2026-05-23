import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#0a0f1f',
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'NASA Astronomy Picture Explorer | Discover the Universe',
  description: 'Explore stunning NASA astronomy pictures daily.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}