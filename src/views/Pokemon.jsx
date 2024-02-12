import { useLoaderData } from "react-router-dom";
import { fetchPokemonData } from "../../api/index.js";
import CardText from "../components/CardText.jsx";
import { Badge, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { pokemonType } from "../data/pokemonType";
import "../styles/pokemon.css";

export async function loader() {
  const data = await fetchPokemonData();
  return data;
}

const Pokemon = () => {
  const pokemonData = useLoaderData();

  return (
    <section>
      <form className="pokemon-form">
        <TextField.Root className="search-bar">
          <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Search by POKEMON name" />
        </TextField.Root>
      </form>
      <div className="card-container">
        {pokemonData.map(pokemon => (
          <CardText
          key={pokemon.id}
          img={"https://images.unsplash.com/photo-1596743343697-bd2c1e5a8c81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={`Image of ${pokemon.name.japanese}`}>

            <span className="card-description">
              <span className="card-type">
                {pokemon.type.map((typ, index) =>
                  <Badge key = {index}
                    color={pokemonType[typ]}>
                    {typ}
                  </Badge>)}
              </span>
              {pokemon.name.japanese}
            </span>

          </CardText>
        ))}
      </div>
    </section>
  )
}

export default Pokemon