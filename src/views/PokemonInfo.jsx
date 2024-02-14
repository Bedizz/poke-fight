
const PokemonInfo = (pokemon) => {
  console.log(pokemon.pokemon)
  return (
    <div>
      <div>
        </div>
        <div>
          <div className="abilities">
            <div>Type</div>
            <hr />
            <div>{pokemon.pokemon.type[0]}</div>
            <hr />
            <div>{pokemon.pokemon.type[1]}</div>
          </div>
          <div className="stats">
            <h1>Stats</h1>
            <hr />
            <div>Hp: {pokemon.pokemon.base.HP}</div>
            <hr />
            <div>Attack: {pokemon.pokemon.base.Attack}</div>
            <hr />
            <div>Defense: {pokemon.pokemon.base.Defense}</div>
            <hr />
            <div>Speed: {pokemon.pokemon.base.Speed}</div>
            
          </div>


        </div>
    
    </div>
  )
}

export default PokemonInfo