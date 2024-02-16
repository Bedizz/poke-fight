import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./views/home";
import Pokemon from "./views/Pokemon";
import PokemonId from "./views/PokemonId";
import BattleField from "./views/BattleField";
import { loader as allPokemonLoader } from "./views/Pokemon";
import { loader as battleLoader } from "./views/BattleField";
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = {<Layout />} errorElement={<Error />}>
    <Route
      index
      element = {<Home />}
      loader = {allPokemonLoader}
      errorElement = {<Error />}
    />
    <Route
      path ="/pokemon"
      element = {<Pokemon />}
      loader = {allPokemonLoader}
      errorElement = {<Error />}
    />
    <Route
      path = "/pokemon/:id"
      element = {<PokemonId />}
      loader = {allPokemonLoader}
      errorElement = {<Error />}  
    />
    <Route
      path = "/pokemon/:id/battle/:enemyId"
      element = {<BattleField />}
      errorElement = {<Error />}
      loader = {battleLoader}
    />
  </Route>
));


function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App
