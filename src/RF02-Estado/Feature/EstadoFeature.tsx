import { useEffect, useState } from 'react'

import ItemList from '../Components/ItemList'
import LoadingState from '../Components/LoadingState'
import ErrorState from '../Components/ErrorState'
import EmptyState from '../Components/EmptyState'

import { getCountries } from '../Services/countriesService'

import type { Item } from '../Types/item'

function EstadoFeature() {
  const [data, setData] = useState<Item[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchCountries = async () => {
      setLoading(true)
      setError(null)

      try {
        const countries = await getCountries(controller.signal)

        setData(countries)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        setError('Ocurrió un error al obtener los países')
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()

    return () => {
      controller.abort()
    }
  }, [])

  if (loading) {
    return <LoadingState />
  }

  if (error !== null) {
    return <ErrorState message={error} />
  }

  if (data.length === 0) {
    return <EmptyState />
  }

  return (
    <main>
      <h1>Listado de países</h1>

      <ItemList items={data} />
    </main>
  )
}

export default EstadoFeature