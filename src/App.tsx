import { useState, useEffect } from 'react'
import './App.css'
import ItemList from './RF02-Estado/Components/ItemList'
import LoadingState from './RF02-Estado/Components/LoadingState'
import ErrorState from './RF02-Estado/Components/ErrorState'
import EmptyState from './RF02-Estado/Components/EmptyState'
import type { Item } from './RF02-Estado/Types/item'

function App() {

  const [data, setData] = useState<Item[]>([]); //data contiene los elementos que obtengamos de la API
  const [loading, setLoading] = useState<boolean>(false); //la aplicación está esperando la respuesta.
  const [error, setError] = useState<string | null>(null); //inicialmente no tenemos ningún error

  useEffect(() => {
    //aquí posteriormente irá la petición de la API
  }, []);

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
