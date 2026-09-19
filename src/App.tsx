import CountryPage from "./RF01-Listado/Feature/CountryPage";
import EstadoFeature from "./RF02-Estado/Feature/EstadoFeature";
import SearchPage from "./RF03-Busqueda/Feature/SearchPage";
import DetalleFeature from "./RF04-detalle/Feature/DetalleFeature";

function App() {
  return (
    <>
      <CountryPage />
      <EstadoFeature />
      <SearchPage />
      <DetalleFeature />
    </>
  );
}

export default App;