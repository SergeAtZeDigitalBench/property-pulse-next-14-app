import PageSpinner from '@/components/PageSpinner'

const LoadingPage = () => {
  return (
    <section className="bg-blue-50 min-h-screen flex flex-col justify-center items-center">
      <PageSpinner isLoading />
    </section>
  )
}

export default LoadingPage
