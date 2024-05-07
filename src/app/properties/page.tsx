import { getProperties } from '@/lib/properties'
import PropertyCard from '@/components/PropertyCard'

const PropertiesPage = async () => {
  const properties = await getProperties()

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
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
  )
}

export default PropertiesPage
