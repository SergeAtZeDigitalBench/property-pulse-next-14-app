import type { ReactNode, ComponentProps } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  heading: string
  className?: string
  textColor?: string
  buttonInfo: {
    href?: string
    onClick?: ComponentProps<'button'>['onClick']
    className?: string
    text: ReactNode
  }
  children: ReactNode
}

const InfoBox = ({
  heading,
  className = 'bg-gray-100',
  textColor = 'text-gray-800',
  buttonInfo,
  children,
}: Props): JSX.Element => {
  return (
    <div className={clsx('p-6 rounded-lg shadow-md', className)}>
      <h2 className={clsx('text-2xl font-bold', textColor)}>{heading}</h2>
      <p className={clsx('mt-2 mb-4', textColor)}>{children}</p>
      {buttonInfo.href && (
        <Link
          href={buttonInfo.href}
          className={clsx(
            'inline-block rounded-lg px-4 py-2 hover:opacity-80',
            buttonInfo.className,
          )}
        >
          {buttonInfo.text}
        </Link>
      )}
      {buttonInfo.onClick && (
        <button
          onClick={buttonInfo.onClick}
          className={clsx(
            'inline-block rounded-lg px-4 py-2 hover:opacity-80',
            buttonInfo.className,
          )}
        >
          {buttonInfo.text}
        </button>
      )}
    </div>
  )
}

export default InfoBox
