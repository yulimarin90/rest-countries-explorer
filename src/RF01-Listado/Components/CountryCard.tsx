//mostrar la información de un país.

import type { Country } from "../Types/country";

interface CountryCardProps {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  const capital = country.capitals?.[0]?.name ?? "No disponible";
  const language = country.languages?.[0]?.name ?? "No disponible";

  return (
    <article className="country-card">
      <h2>{country.names.common}</h2>

      <p>
        <strong>Región:</strong> {country.region}
      </p>

      <p>
        <strong>Capital:</strong> {capital}
      </p>

      <p>
        <strong>Idioma:</strong> {language}
      </p>
    </article>
  );
}

export default CountryCard;
