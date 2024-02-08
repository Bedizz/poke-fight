import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout";
import Error from "../components/Error";
import Home from "../views/Home";
import Pokemon from "../views/Pokemon";
import PokemonInfo from "../views/PokemonInfo";
import PokemonId from "../views/PokemonId";
import { loader as allPokemonLoader } from "../views/Pokemon";
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = {<Layout />}>
    <Route
      index
      element = {<Home />}
      errorElement = {<Error />}
    />
    <Route
      path ="/pokemon"
      element = {<Pokemon />}
      loader={allPokemonLoader}
      errorElement = {<Error />}
    />
    <Route
      path = "/pokemon/:id"
      element = {<PokemonId />}
      errorElement = {<Error />}  
    />
    <Route
      path = "/pokemon/:id/:info"
      element = {<PokemonInfo />}
      errorElement = {<Error />}
    />
  </Route>
));


function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App
