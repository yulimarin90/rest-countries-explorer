import { useEffect, useState } from "react";
import CountryList from "../Components/CountryList";
import ErrorState from "../Components/ErrorState";
import LoadingState from "../Components/LoadingState";
import { getCountries } from "../Services/countriesService";
import type { Country } from "../Types/item";

function ReintentoFeature() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCountries = async (
    signal?: AbortSignal
  ) => {
    try {
      setLoading(true);
      setError("");

      const data = await getCountries(signal);

      setCountries(data);
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      setError("No se pudieron cargar los países.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    loadCountries(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const handleRetry = () => {
    loadCountries();
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <main>
      <h1>Reintento de solicitud</h1>

      <CountryList countries={countries} />
    </main>
  );
}

export default ReintentoFeature;