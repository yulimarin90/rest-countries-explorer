import type { CountriesResponse, Item } from '../Types/item'

const API_URL =
  'https://api.restcountries.com/countries/v5?limit=50&response_fields=names.common,region,languages,capitals'

export async function getCountries(
  signal?: AbortSignal
): Promise<Item[]> {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
    },
    signal,
  })

  if (!response.ok) {
    throw new Error('No fue posible obtener los países')
  }

  const result: CountriesResponse = await response.json()

  return result.data.objects
}