import { useEffect, useState } from "react";
import CountryList from "../Components/CountryList";
import FavoriteCounter from "../Components/FavoriteCounter";
import { getCountries } from "../Services/countriesServices";
import {
  getFavorites,
  saveFavorites,
  toggleFavorite,
} from "../Services/favoritesService";
import type { Country } from "../Types/item";
import type { Favorite } from "../Types/favorite";

function FavoritosFeature() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
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
        setFavorites(getFavorites());
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        ) {
          return;
        }

        setError("No se pudieron cargar los países");
      } finally {
        setLoading(false);
      }
    };

    loadCountries();

    return () => {
      controller.abort();
    };
  }, []);

  const handleToggleFavorite = (countryName: string) => {
    const updatedFavorites = toggleFavorite(
      favorites,
      countryName
    );

    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  if (loading) {
    return <p>Cargando países...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Países favoritos</h1>

      <FavoriteCounter count={favorites.length} />

      <CountryList
        countries={countries}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </main>
  );
}

export default FavoritosFeature;
