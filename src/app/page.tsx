import Link from 'next/link'

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">
        Hello world!
      </h1>
      <Link href="/properties">Show properties</Link>
    </>
  )
}

export default HomePage
