
import type { Favorite } from "../Types/favorite";

const FAVORITES_KEY = "favoriteCountries";

export const getFavorites = (): Favorite[] => {
  const storedFavorites = localStorage.getItem(FAVORITES_KEY);

  if (storedFavorites === null) {
    return [];
  }

  return JSON.parse(storedFavorites) as Favorite[];
};

export const saveFavorites = (favorites: Favorite[]): void => {
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
};

export const toggleFavorite = (
  favorites: Favorite[],
  countryName: string
): Favorite[] => {
  const isFavorite = favorites.some(
    (favorite) => favorite.name === countryName
  );

  if (isFavorite) {
    return favorites.filter(
      (favorite) => favorite.name !== countryName
    );
  }

  return [
    ...favorites,
    {
      name: countryName,
    },
  ];
};