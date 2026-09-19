import type { Country } from "../Types/item";
import type { Favorite } from "../Types/favorite";
import FavoriteButton from "./FavoriteButton";

interface CountryListProps {
  countries: Country[];
  favorites: Favorite[];
  onToggleFavorite: (countryName: string) => void;
}

function CountryList({
  countries,
  favorites,
  onToggleFavorite,
}: CountryListProps) {
  return (
    <ul>
      {countries.map((country) => {
        const countryName = country.names.common;

        const isFavorite = favorites.some(
          (favorite) => favorite.name === countryName
        );

        return (
          <li key={countryName}>
            <span>{countryName}</span>

            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={() => onToggleFavorite(countryName)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CountryList;