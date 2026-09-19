import { useState } from "react";
import CountryPage from "./RF01-Listado/Feature/CountryPage";
import EstadoFeature from "./RF02-Estado/Feature/EstadoFeature";
import SearchPage from "./RF03-Busqueda/Feature/SearchPage";
import DetalleFeature from "./RF04-detalle/Feature/DetalleFeature";
import FavoritosFeature from "./RF05-favoritos/Feature/FavoritosFeature";
import ReintentoFeature from "../src/RF06-reintento/Feature/ReintentoFeature";
import "./App.css";

function App() {
  const [vista, setVista] = useState("");

  return (
    <div className="app">
      <header className="app-header">
        <h1>REST Countries</h1>

        <nav className="navigation">
          <button
            type="button"
            onClick={() => setVista("listado")}
          >
            Listado
          </button>

          <button
            type="button"
            onClick={() => setVista("favoritos")}
          >
            Favoritos
          </button>
          <button
            type="button"
            onClick={() => setVista("busqueda")}
          >
            Busqueda
          </button>
          <button
            type="button"
            onClick={() => setVista("detalle")}
          >
            Detalle
          </button>
          
        </nav>
      </header>

      <main>
        {vista === "listado" && <CountryPage />}

        {vista === "favoritos" && <FavoritosFeature />}

        {vista === "busqueda" && <SearchPage />}

        {vista === "detalle" && <DetalleFeature />}

        
      </main>
    </div>
  );
}
export default App;

