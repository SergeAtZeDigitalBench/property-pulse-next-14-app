import { Inter } from 'next/font/google'
import clsx from 'clsx'

import type { Metadata } from 'next'

import '@/assets/styles/globals.css'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'PropertyPulse | %s',
    default: 'PropertyPulse | Find the perfect rental',
  },
  description: 'Find your dream rental propety',
  keywords: [
    'rental',
    'find rentals',
    'rental property',
    'to rent',
    'property',
    'real estate',
  ],
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <header>
          <Navbar />
        </header>
        <main className="min-h-[83vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
