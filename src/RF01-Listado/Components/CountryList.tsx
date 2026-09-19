// Este componente recibe el arreglo de países y se encarga de recorrerlo.
import type { Country } from "../types/country";
import CountryCard from "./CountryCard";

interface CountryListProps {
  countries: Country[];
}

function CountryList({ countries }: CountryListProps) {
  return (
    <section>
      <h1>Listado de países</h1>

      <div>
        {countries.map((country) => (
          <CountryCard
            key={country.names.common}
            country={country}
          />
        ))}
      </div>
    </section>
  );
}

export default CountryList;
