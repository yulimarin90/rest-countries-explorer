import { useState, useEffect } from 'react'
import './App.css'
import ItemList from './RF02-Estado/Components/ItemList'
import LoadingState from './RF02-Estado/Components/LoadingState'
import ErrorState from './RF02-Estado/Components/ErrorState'
import EmptyState from './RF02-Estado/Components/EmptyState'
import type { 
  Item, 
  CountriesResponse, 
} from './RF02-Estado/Types/item'

function App() {

  const [data, setData] = useState<Item[]>([]); //data contiene los elementos que obtengamos de la API
  const [loading, setLoading] = useState<boolean>(true); //la aplicación está esperando la respuesta.
  const [error, setError] = useState<string | null>(null); //inicialmente no tenemos ningún error

  useEffect(() => {
    const controller = new AbortController()

    const fetchCountries = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          'https://api.restcountries.com/countries/v5?limit=25&response_fields=names.common,region,languages,capitals',
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
            },
            signal: controller.signal,
          }
        )
      
        if (!response.ok) {
          throw new Error('No fue posible obtener los paises')
        }
        
        const result: CountriesResponse = await response.json()
        
        setData(result.data.objects)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        setError('Ocurrió un error al obtener los paises')
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
      return <LoadingState />;
    }

    if (error !== null) {
      return <ErrorState message={error} />;
    }

    if (data.length === 0) {
      return <EmptyState />;
    }
  
    return (
      <main>
      <h1>Listado de paises</h1>
      
      <ItemList items={data} />
      </main>
    );
  }

export default App
