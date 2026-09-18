import { useEffect, useState } from "react";

interface Country {
  name: {
    common: string;
  };
  cca3: string;
}

export const useCountrySearch = (
  countries: Country[],
  searchTerm: string
) => {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const normalizedSearch = searchTerm.trim().toLowerCase();

      if (normalizedSearch === "") {
        setFilteredCountries(countries);
        return;
      }

      const results = countries.filter((country) =>
        country.name.common.toLowerCase().includes(normalizedSearch)
      );

      setFilteredCountries(results);
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, [countries, searchTerm]);

  return filteredCountries;
};