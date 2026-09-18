import { useEffect, useState } from "react";
import { getCountries } from "../services/countriesService";
import type { Country } from "../Types/item";
import { useCountrySearch } from "../hooks/useCountrySearch";

const SearchPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchInput, setSearchInput] = useState("");
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

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  if (loading) {
    return <p>Cargando países...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Búsqueda de países</h1>

      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Buscar país..."
        />

        <button type="button" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {filteredCountries.length === 0 ? (
        <p>No se encontraron países coincidentes.</p>
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.names.common}>
              {country.names.common}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default SearchPage;