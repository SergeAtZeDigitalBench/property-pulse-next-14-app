'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'

import logoWhiteImg from '@/assets/images/logo-white.png'

import MobileMenuButton from './components/MobileMenuButton'
import ProfileButton from './components/ProfileButton'
import ProfileMenu from './components/ProfileMenu'
import MobileMenu from './components/MobileMenu'

type Props = {
  [x: string]: any
}

const Navbar = ({}: Props): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false)

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <MobileMenuButton
              type="button"
              id="mobile-dropdown-button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                setIsMobileMenuOpen((current) => !current)
              }}
            />
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image
                className="h-10 w-auto"
                src={logoWhiteImg}
                alt="Property Pulse Logo"
              />

              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                PropertyPulse
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Properties
                </Link>
                <Link
                  href="/properties/add"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Add Property
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          <div className="hidden md:block md:ml-6">
            <div className="flex items-center">
              <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                <FaGoogle className="text-whiter mr-2" />
                <span>Login or Register</span>
              </button>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged In) --> */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <Link href="/messages" className="relative group">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                2
                {/* <!-- Replace with the actual number of notifications --> */}
              </span>
            </Link>
            {/* <!-- Profile dropdown button --> */}
            <div className="relative ml-3">
              <ProfileButton
                type="button"
                onClick={() => {
                  setIsProfileMenuOpen((current) => !current)
                }}
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              />

              {/* <!-- Profile dropdown --> */}
              {isProfileMenuOpen && (
                <ProfileMenu
                  id="user-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={1}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && <MobileMenu id="mobile-menu" />}
    </nav>
  )
}

export default Navbar
