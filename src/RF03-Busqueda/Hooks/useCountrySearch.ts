import { useEffect, useState } from "react";
import type { Country } from "../Types/item";

export const useCountrySearch = (
  countries: Country[],
  searchTerm: string
) => {
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const normalizedSearch = searchTerm.trim().toLowerCase();

      if (normalizedSearch === "") {
        setFilteredCountries(countries);
        return;
      }

        const results = countries.filter((country) => {
        console.log("PAÍS QUE SE ESTÁ FILTRANDO:", country);

        return country.names.common
          .toLowerCase()
          .includes(normalizedSearch);
      });

      setFilteredCountries(results);
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, [countries, searchTerm]);

  return filteredCountries;
};