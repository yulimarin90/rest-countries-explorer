import type { Country } from "../Types/item";

interface CountryListProps {
  countries: Country[];
}

function CountryList({ countries }: CountryListProps) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.names.common}>
          {country.names.common}
        </li>
      ))}
    </ul>
  );
}

export default CountryList;