import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isTrue: boolean
}

const RenderWhen = ({ children, isTrue }: Props): JSX.Element | null => {
  return isTrue ? <>{children}</> : null
}

export default RenderWhen
