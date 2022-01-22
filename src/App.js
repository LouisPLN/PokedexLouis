import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomeVue from "./pages/HomeVue";
import PokedexVue from "./pages/PokedexVue";
import CategoryVue from "./pages/CategoryVue";
import FavorisVue from "./pages/FavorisVue";
import Loader from "./Loader";
import { useState, useEffect } from "react";

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1900);
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route
          exact
          path="/React-PokedexLouis/Favoris"
          element={<FavorisVue />}
        />
        <Route
          exact
          path="/React-PokedexLouis/Categories"
          element={<CategoryVue />}
        />
        <Route
          exact
          path="/React-PokedexLouis/Pokedex"
          element={<PokedexVue />}
        />
        <Route exact path="*" element={<HomeVue />} />
      </Routes>
      )
    </div>
  );
};

export default App;
