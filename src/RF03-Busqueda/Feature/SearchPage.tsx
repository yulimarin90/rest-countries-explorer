import { useEffect, useState } from "react";
import { getCountries } from "../Services/countriesService";
import type { Country } from "../Types/item";
import { useCountrySearch } from "../Hooks/useCountrySearch";

const SearchPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchInput, setSearchInput] = useState("");
  //const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const loadCountries = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getCountries(controller.signal);

        setCountries(data);
      } catch (error){
        if (error instanceof DOMException && error.name === "AbortError") {
          return
        }

        setError("No se pudieron cargar los países");
      } finally {
        setLoading(false);
      }
    }

    loadCountries();

    return () => {
      controller.abort();
    }
  }, [])

  const filteredCountries = useCountrySearch(
    countries,
    searchInput
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

      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Buscar país..."
        />
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