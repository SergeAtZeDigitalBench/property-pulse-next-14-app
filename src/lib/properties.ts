import properties from '@/mocks/properties.json'

const serveMockData = <D = any>(
  data: D,
  delay: number,
  error?: string,
): Promise<D> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error(error))
      } else {
        resolve(data)
      }
    }, delay)
  })

export const getProperties = () => {
  return serveMockData(properties, 800)
}

export const getRecentProperties = async (maxLimit = 3) => {
  const allProperties = await serveMockData(properties, 400)
  return allProperties
    .sort((current, next) => {
      const currentDate = new Date(current.createdAt).getMilliseconds()
      const nextDate = new Date(current.createdAt).getMilliseconds()
      return currentDate > nextDate ? 1 : -1
    })
    .slice(0, maxLimit)
}
