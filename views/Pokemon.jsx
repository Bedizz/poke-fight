import { useLoaderData } from "react-router-dom";
import { fetchPokemonData } from "../api/index.js";

export async function loader() {
  const data = await fetchPokemonData();
  return data;
}

const Pokemon = () => {
  const pokemonData = useLoaderData();
  console.log(pokemonData);
  return (
    <div>Pokemon</div>
  )
}

export default Pokemon