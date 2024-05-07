import Image from 'next/image'
import clsx from 'clsx'

import logoImg from '@/assets/images/logo.png'

type Props = {
  className?: string
}

const Footer = ({ className }: Props): JSX.Element => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={clsx('bg-gray-200 py-4 mt-auto', className)}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={logoImg} alt="Logo" className="h-8 w-auto" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
