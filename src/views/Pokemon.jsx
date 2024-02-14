import { useLoaderData } from "react-router-dom";
import { fetchPokemonData } from "../../api/index.js";
import CardText from "../components/CardText";
import { Badge } from "@radix-ui/themes";
import { pokemonType } from "../data/pokemonType";
import Popup from "../components/Popup";
import { useState } from "react";

import "../styles/pokemon.css";


export function loader() {
  const data = fetchPokemonData();
  return data;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 5,
    behavior: "smooth"
  });
}

const partialLoadNum = 50;

const Pokemon = () => {
  const [submitText, setSubmitText] = useState("");
  const [next, setNext] = useState(partialLoadNum);

  const pokemonData = useLoaderData();

  const loadMoreData = () => {
    setNext(next + partialLoadNum);
  };

  return (
    <section className="pokemon-section">
      <Popup 
        setSubmitText={setSubmitText}/>

      <div className="card-container">
        {pokemonData.slice(0, next).map(pokemon => (
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
      {next < pokemonData.length ? (
        <button className="load-btn" onClick={loadMoreData}>
          Load More
        </button>) : null}
      <button className="top-btn" onClick={scrollToTop}>
        Top
      </button>
    </section>
  )
}

export default Pokemon