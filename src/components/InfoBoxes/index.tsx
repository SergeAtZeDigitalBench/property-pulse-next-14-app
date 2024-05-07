import Link from 'next/link'

import InfoBox from '@/components/InfoBox'

type Props = {
  [x: string]: any
}

const InfoBoxes = ({}: Props): JSX.Element => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            className="bg-gray-100"
            buttonInfo={{
              href: '/properties',
              text: 'Browse Properties',
              className: 'bg-black text-white',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            className="bg-blue-100"
            buttonInfo={{
              href: '/properties/add',
              text: 'Add Property',
              className: 'bg-blue-500 text-white',
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
