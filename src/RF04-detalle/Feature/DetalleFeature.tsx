import { useEffect, useState } from 'react'

import DetailCard from '../Components/DetailCard'
import BackButton from '../Components/BackButton'

import { getCountries } from '../Services/countriesService'

import type { Item } from '../Types/item'

function DetalleFeature() {
  const [countries, setCountries] = useState<Item[]>([])
  const [selectedCountry, setSelectedCountry] = useState<Item | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchCountries = async () => {
      try {
        const data = await getCountries(controller.signal)

        setCountries(data)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        console.error('Error al obtener los países:', error)
      }
    }

    fetchCountries()

    return () => {
      controller.abort()
    }
  }, [])

  if (selectedCountry !== null) {
    return (
      <main>
        <DetailCard item={selectedCountry} />

        <BackButton
          onBack={() => setSelectedCountry(null)}
        />
      </main>
    )
  }

  return (
    <main>
      <h1>Selecciona un país</h1>

      <div>
        {countries.map((country) => (
          <button
            key={country.names.common}
            type="button"
            onClick={() => setSelectedCountry(country)}
          >
            {country.names.common}
          </button>
        ))}
      </div>
    </main>
  )
}

export default DetalleFeature