import { Suspense } from 'react'

import HomeProperties from '@/components/HomeProperties'
import InfoBoxes from '@/components/InfoBoxes'
import Hero from '@/components/Hero'

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <Suspense>
        <HomeProperties />
      </Suspense>
    </>
  )
}

export default HomePage
