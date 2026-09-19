import type { Country, CountriesResponse } from "../Types/item";

const API_URL =
  "https://api.restcountries.com/countries/v5?limit=50&pretty=1";

export const getCountries = async (
  signal?: AbortSignal
): Promise<Country[]> => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization:
        `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los países");
  }

  const data: CountriesResponse = await response.json();

  console.log("PAÍSES RECIBIDOS:", data.data.objects);

  return data.data.objects;
};