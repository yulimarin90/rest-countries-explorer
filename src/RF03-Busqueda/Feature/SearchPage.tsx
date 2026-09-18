import { useEffect, useState } from "react";
import { getCountries } from "../services/countriesService";
import { useCountrySearch } from "../hooks/useCountrySearch";

interface Country {
  name: {
    common: string;
  };
  cca3: string;
}

const SearchPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getCountries();

        setCountries(data);
      } catch {
        setError("No se pudieron cargar los países");
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  const filteredCountries = useCountrySearch(
    countries,
    searchTerm
  );

  if (loading) {
    return <p>Cargando países...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Búsqueda de países</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Buscar país..."
      />

      {filteredCountries.length === 0 ? (
        <p>No se encontraron países.</p>
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default SearchPage;