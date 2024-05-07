'use client'

import { ComponentProps } from 'react'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import RenderWhen from '@/components/RenderWhen'

type Props = {
  isLoggedIn: boolean
} & ComponentProps<'div'>

const MobileMenu = ({ isLoggedIn, ...restDivProps }: Props): JSX.Element => {
  const pathname = usePathname()

  return (
    <div {...restDivProps}>
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          href="/"
          className={clsx('block rounded-md px-3 py-2 text-base font-medium', {
            ['bg-gray-900 text-white']: pathname === '/',
            ['text-gray-300 hover:bg-gray-700 hover:text-white']:
              pathname !== '/',
          })}
        >
          Home
        </Link>
        <Link
          href="/properties"
          className={clsx('block rounded-md px-3 py-2 text-base font-medium', {
            ['bg-gray-900 text-white']: pathname === '/properties',
            ['text-gray-300 hover:bg-gray-700 hover:text-white']:
              pathname !== '/properties',
          })}
        >
          Properties
        </Link>
        <RenderWhen isTrue={isLoggedIn}>
          <Link
            href="/properties/add"
            className={clsx(
              'block rounded-md px-3 py-2 text-base font-medium',
              {
                ['bg-gray-900 text-white']: pathname === '/properties/add',
                ['text-gray-300 hover:bg-gray-700 hover:text-white']:
                  pathname !== '/properties/add',
              },
            )}
          >
            Add Property
          </Link>
        </RenderWhen>

        <RenderWhen isTrue={!isLoggedIn}>
          <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
            <FaGoogle className="text-whiter mr-2" />
            <span>Login or Register</span>
          </button>
        </RenderWhen>
      </div>
    </div>
  )
}

export default MobileMenu
