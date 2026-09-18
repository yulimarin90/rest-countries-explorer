
import { useEffect, useState } from "react";

import { getCountries } from "../Services/countriesService";

import type { Country } from "../types/country";

import CountryList from "../Components/CountryList";

function CountryPage() {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getCountries(controller.signal);

        setData(result.data.objects);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setError("Ocurrió un error al obtener los países");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <p>Cargando países...</p>;
  }

  if (error !== null) {
    return <p>{error}</p>;
  }

  if (data.length === 0) {
    return <p>No se encontraron países.</p>;
  }

  return <CountryList countries={data} />;
}

export default CountryPage;

