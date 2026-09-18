import type { Country, CountriesResponse } from "../Types/item";

const API_URL =
  "https://api.restcountries.com/countries/v5?limit=25&pretty=1";

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization:
        "Bearer rc_live_21d8af0706f344db9aae2cf3d594ef5a",
    },
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los países");
  }

  const data: CountriesResponse = await response.json();

  console.log("PAÍSES RECIBIDOS:", data.data.objects);

  return data.data.objects;
};