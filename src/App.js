import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeVue";
import PokedexPage from "./pages/PokedexVue";

const App = () => {
  return (
    <Routes>
      <Route exact path="/Pokedex" element={<PokedexPage />} />
      <Route exact path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
