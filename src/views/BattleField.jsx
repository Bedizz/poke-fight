import "../styles/Battle.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchSinglePokemonData } from "../api";

export function loader({params}) {
  const selectedPokemon = fetchSinglePokemonData(params.id);
  const vilan = fetchSinglePokemonData(3);

  return Promise.all([selectedPokemon, vilan])
  .then(([playerPokemon, enemyPokemon]) => {
    return { playerPokemon, enemyPokemon };
  })
}

const BattleField = () => {
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [enemyPokemon, setEnemyPokemon] = useState(null);
  const [log, setLog] = useState([]);
  const navigate = useNavigate();
  const data = useLoaderData();

  const { name: { english: playerName },
    base: { HP: playerHp, Attack: playerAttack },
    id: playerId } = data.playerPokemon[0];

  const { name: { english: enemyName },
    base: { HP: enemyHp, Attack: enemyAttack },
    id: enemyId } = data.enemyPokemon[0];

  const playerStats = {
    playerId,
    playerName,
    playerAttack,
    playerHp
  }

  const enemyStats = {
    enemyId,
    enemyName,
    enemyAttack,
    enemyHp
  }

  useEffect(() => {
    setLog([`Battle starts! ${playerName} vs. ${enemyName}`]);
    setPlayerPokemon(playerStats);
    setEnemyPokemon(enemyStats);
  }, []);

  const handleAttack = () => {
    const playerDamage = Math.floor(Math.random() * playerAttack);
    const enemyDamage = Math.floor(Math.random() * enemyAttack);

    setPlayerPokemon(prevState => ({ ...prevState,
       playerHp: Math.max(prevState.playerHp - enemyDamage, 0) }));
      console.log(playerPokemon)

    setEnemyPokemon(prevState => ({ ...prevState,
       enemyHp: Math.max(prevState.enemyHp - playerDamage, 0) }));

    setLog((prev) => [
      ...prev,
      `${playerName} deals ${playerDamage} damage!`,
      `${enemyName} deals ${enemyDamage} damage!`,
    ]);

    if (playerHp - enemyDamage <= 0) {
      setLog((prevState) => [...prevState, `${enemyName} wins!`]);
    } else if (enemyHp - playerDamage <= 0) {
      setLog((prevState) => [...prevState, `${pokemonName} wins!`]);
    }
  };

  const handleEscape = () => {
    navigate("/pokemon");
    setPlayerPokemon(null);
    setEnemyPokemon(null);
    setLog([]);
  };

  return (
    <div className="battle-field">
      <div className="pokemon-battle-img">
        <div>
          <p className="battle-p">{playerName}</p>
          <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${playerId}.png`}
            alt={`A picture of ${playerName}`}
          />
        </div>
        <div>VS</div>
        <div>
        <p className="battle-p">{enemyName}</p>
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${enemyId}.png`}
          alt={`A picture of ${enemyName}`} />
        </div>
      </div>
      <button className="battle-btn" onClick={handleAttack}>Attack</button>
      <button className="battle-btn" onClick={handleEscape}>Escape</button>
      <div className="battle-health">
        {playerPokemon && <p className="battle-p">{`${playerName}: ${playerHp} HP`}</p>}
        {enemyPokemon && <p className="battle-p">{`${enemyName}: ${enemyHp} HP`}</p>}
      </div>
      <div>
        {log.map((message, index) => (
          <p className="battle-p" key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default BattleField;