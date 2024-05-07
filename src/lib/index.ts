import type { Rates } from '@/types'

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export const getRateDisplay = ({ weekly, nightly, monthly }: Rates) => {
  if (monthly) {
    return `${USDollar.format(monthly)}/mo`
  }
  if (nightly) {
    return `${USDollar.format(nightly)}/night`
  }

  return `${USDollar.format(weekly)}/week`
}
