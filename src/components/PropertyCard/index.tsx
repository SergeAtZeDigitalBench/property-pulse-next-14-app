import Image from 'next/image'
import Link from 'next/link'
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from 'react-icons/fa'

import type { Property } from '@/types'

import RenderWhen from '@/components/RenderWhen'
import { getRateDisplay } from '@/lib'

type Props = {
  property: Pick<
    Property,
    | '_id'
    | 'name'
    | 'images'
    | 'type'
    | 'rates'
    | 'beds'
    | 'baths'
    | 'square_feet'
    | 'location'
  >
}

const PropertyCard = ({ property }: Props): JSX.Element => {
  const { images, _id, name, type, rates, beds, baths, square_feet, location } =
    property

  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={'/images/properties/' + images[0]}
        width={256}
        height={144}
        alt={name}
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{type}</div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay(rates)}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p className="flex gap-1 items-center">
            <FaBed /> {beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p className="flex gap-1 items-center">
            <FaBath /> {baths}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p className="flex gap-1 items-center">
            <FaRulerCombined />
            {square_feet} <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p className="flex gap-1 items-center">
            <FaMoneyBill /> Weekly
          </p>
          <RenderWhen isTrue={!!rates.monthly}>
            <p className="flex gap-1 items-center">
              <FaMoneyBill /> Monthly
            </p>
          </RenderWhen>
          <RenderWhen isTrue={!!rates.nightly}>
            <p className="flex gap-1 items-center">
              <FaMoneyBill /> Nightly
            </p>
          </RenderWhen>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-lg text-orange-700" />
            <span className="text-orange-700">
              {location.city} {location.state}
            </span>
          </div>
          <Link
            href={`/properties/${_id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
