import React from 'react'
import PokemonInfo from '../views/PokemonInfo'
import { useParams } from "react-router-dom";

export async function loader() {
  const data = await fetchPokemonData();
  return data; 
}
const PokemonId = () => {
  const pokemonData = useLoaderData();
  const {id} = useParams()
  
 const pokemon = pokemonData.find(pokemon => {return pokemon.id === id})

  return (
    <>
      {pokemonData && (
        <>
          <div className='top-container'>
            <h1>PokemonName</h1>
            <img src="Image" alt="PokemonName" />
            <div>Its power type</div>
          </div>
          <div className='bottom-container'>
            <PokemonInfo />
          </div>
        </>
      )}
    </>
  )
}

export default PokemonId