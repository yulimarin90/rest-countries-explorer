// Este archivo será el encargado de conectarse con REST Countries

import type { CountriesResponse } from "../types/country";

const API_URL =
  "https://api.restcountries.com/countries/v5?limit=25&response_fields=names.common,region,languages,capitals";

const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;

export const getCountries = async (
  signal: AbortSignal
): Promise<CountriesResponse> => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error("No fue posible obtener los países");
  }

  const data: CountriesResponse = await response.json();

  return data;
};