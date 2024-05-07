export type Property = {
  _id: string
  owner: string
  name: string
  type: string
  description: string
  location: Location
  beds: number
  baths: number
  square_feet: number
  amenities: string[]
  rates: Rates
  seller_info: SellerInfo
  images: string[]
  is_featured: boolean
  createdAt: Date
  updatedAt: Date
}

export type Location = {
  street: string
  city: string
  state: string
  zipcode: string
}

export type Rates = {
  weekly: number
  monthly?: number
  nightly?: number
}

export type SellerInfo = {
  name: string
  email: string
  phone: string
}
