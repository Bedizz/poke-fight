import { useLoaderData } from "react-router-dom";
import { fetchPokemonData } from "../../api/index.js";
import CardText from "../components/CardText.jsx";
import { Badge } from "@radix-ui/themes";
import { pokemonType } from "../data/pokemonType";
import "../styles/pokemon.css";


export async function loader() {
  const data = await fetchPokemonData();
  return data;
}

const Pokemon = () => {
  const pokemonData = useLoaderData();

  return (
    <section className="pokemon-section">
      <form className="pokemon-form">
      </form>
      <div className="card-container">
        {pokemonData.map(pokemon => (
          <CardText
          key={pokemon.id}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={`Image of ${pokemon.name.english}`}>

            <span className="card-description">
              <span className="card-type">
                {pokemon.type.map((typ, index) =>
                  <Badge key = {index}
                    color={pokemonType[typ]}>
                    {typ}
                  </Badge>)}
              </span>
              {pokemon.name.english}
            </span>

          </CardText>
        ))}
      </div>
    </section>
  )
}

export default Pokemon