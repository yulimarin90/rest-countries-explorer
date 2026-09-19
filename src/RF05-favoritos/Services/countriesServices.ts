import type { Country, CountriesResponse } from "../Types/item";

const API_URL =
  "https://api.restcountries.com/countries/v5?limit=25&response_fields=names.common";

export async function getCountries(
  signal?: AbortSignal
): Promise<Country[]> {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los países");
  }

  const data: CountriesResponse = await response.json();

  return data.data.objects;
}
