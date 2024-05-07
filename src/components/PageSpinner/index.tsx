'use client'

import ClipLoader from 'react-spinners/ClipLoader'

type Props = {
  isLoading: boolean
}

const PageSpinner = ({ isLoading }: Props): JSX.Element => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={isLoading}
      size={150}
      speedMultiplier={1}
    />
  )
}

export default PageSpinner
