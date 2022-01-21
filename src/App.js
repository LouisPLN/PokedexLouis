import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomeVue from "./pages/HomeVue";
import PokedexVue from "./pages/PokedexVue";
import CategoryVue from "./pages/CategoryVue";
import FavorisVue from "./pages/FavorisVue";

const App = () => {
  return (
    <Routes>
      <Route exact path="/Favoris" element={<FavorisVue />} />
      <Route exact path="/Categories" element={<CategoryVue />} />
      <Route exact path="/Pokedex" element={<PokedexVue />} />
      <Route exact path="*" element={<HomeVue />} />
    </Routes>
  );
};

export default App;
