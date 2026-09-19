
import CountryPage from "./RF01-Listado/Feature/CountryPage";
import EstadoFeature from "./RF02-Estado/Feature/EstadoFeature";
import SearchPage from "./RF03-Busqueda/Feature/SearchPage";
import DetalleFeature from "./RF04-detalle/Feature/DetalleFeature";
import FavoritosFeature from "./RF05-favoritos/Feature/FavoritosFeature";
import ReintentoFeature from "../src/RF06-reintento/Feature/ReintentoFeature";

function App() {
  return (
    <>
      <CountryPage />
      <EstadoFeature />
      <SearchPage />
      <DetalleFeature />
      <FavoritosFeature />
       <ReintentoFeature />
    </>
  );
}

