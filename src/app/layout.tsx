import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import '@/assets/styles/globals.css'

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
      <body className={inter.className}>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}

export default RootLayout
