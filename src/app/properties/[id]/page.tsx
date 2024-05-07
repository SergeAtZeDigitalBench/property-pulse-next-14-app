import type { PageProps } from '@/types'

const PropertyDetailsPage = async ({ params }: PageProps<{ id: string }>) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Property Details
      </h1>
    </>
  )
}

export default PropertyDetailsPage
