import Link from 'next/link'

import PropertyCard from '@/components/PropertyCard'
import { getRecentProperties } from '@/lib/properties'

type Props = {
  [x: string]: any
}

const HomeProperties = async ({}: Props) => {
  const properties = await getRecentProperties()

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.length === 0 && <p>No properties found</p>}
            {properties.map(
              ({
                _id,
                images,
                name,
                type,
                beds,
                baths,
                square_feet,
                rates,
                location,
              }) => {
                return (
                  <PropertyCard
                    key={_id}
                    property={{
                      _id,
                      images,
                      name,
                      type,
                      beds,
                      baths,
                      square_feet,
                      rates,
                      location,
                    }}
                  />
                )
              },
            )}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  )
}

export default HomeProperties
