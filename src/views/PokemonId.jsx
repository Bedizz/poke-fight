import React, {useState} from 'react'
import PokemonInfo from '../views/PokemonInfo'
import { fetchPokemonData } from "../../api/index.js";
import { useParams,useLoaderData, Link, useNavigate } from "react-router-dom";

import '../views/PokemonId.css'

export function loader() {
  const data = fetchPokemonData();
  return data; 
  console.log(data)
}



const PokemonId = () => {
  const [showInfo, setShowInfo] = useState(false);
  const pokemonData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  

  const pokemon = pokemonData.find(pokemon => pokemon.id.toString() === id);
  //url her zaman stringdir ve sen burada number olan idyi yakalamaya çalışıyorsun. ancak id string olduğu için stringe çevirmen gerekiyor. o yüzden çevirmediğin noktada hata alıyorsun.

  const handleBack = () => {
    navigate(-1);
  }

 
  return (
    <>
      {pokemon && (
        <>
        <div className='body-container'>
        <div className='top-container'>
          <div id='pokedex'>
            <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png'} alt="PokemonName" />
            <h1 className='poke-name'>{pokemon.name.english}</h1>
            
          </div>
          
          </div>
        </div>
        </>
      )}
      <div className='button-container'><Link><button>Let's Fight!</button></Link><Link><button onClick={handleBack}>Select Another Pokemon</button></Link> </div>
      <div className='information-container'  onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <PokemonInfo pokemon={pokemon}/> : <h1>Click for more info</h1>}
            
          </div>
    </>
  )
}

export default PokemonId