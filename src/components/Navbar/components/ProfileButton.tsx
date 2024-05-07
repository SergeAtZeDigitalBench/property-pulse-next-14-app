import { type ComponentProps } from 'react'
import Image from 'next/image'

import profileDefaultImg from '@/assets/images/profile.png'

const ProfileButton = (props: ComponentProps<'button'>): JSX.Element => {
  return (
    <button
      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      {...props}
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">Open user menu</span>
      <Image
        className="h-8 w-8 rounded-full"
        src={profileDefaultImg}
        alt="profile"
      />
    </button>
  )
}

export default ProfileButton
