import { useLoaderData, useNavigate } from "react-router-dom";
import { fetchPokemonData } from "../api/index.js";
import CardText from "../components/CardText";
import { Badge } from "@radix-ui/themes";
import { pokemonType } from "../data/pokemonType";
import Popup from "../components/Popup";
import { useState, useEffect } from "react";

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
  const [submitText, setSubmitText] = useState(null);
  const [next, setNext] = useState(partialLoadNum);
  const [dataLength, setDataLength] = useState(partialLoadNum);

  const pokemonData = useLoaderData();
  const navigate = useNavigate();

  const filteredPokemonData = submitText ? pokemonData.filter(
    pokemon => pokemon.name.english.toLowerCase() === submitText.toLowerCase() ||
    pokemon.type.some(type => type.toLowerCase() === submitText.toLowerCase())
  ) : pokemonData;

  useEffect(() => {
    setDataLength(filteredPokemonData.length);
  }, [filteredPokemonData])

  const loadMoreData = () => {
    setNext(next + partialLoadNum);
  };

  return (
    <section className="pokemon-section">
      <Popup 
        setSubmitText={setSubmitText}
        dataLength={dataLength}
      />

      <div className="card-container">
        {filteredPokemonData.length === 0 ? <h2 className="no-data">No Pokemon found....</h2>
        : filteredPokemonData.slice(0, next).map(pokemon => (
          <CardText
          key={pokemon.id}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={`Image of ${pokemon.name.english}`}>

            <span className="card-description" 
              onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
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
      {next < filteredPokemonData.length ? (
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