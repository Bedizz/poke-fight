import "../styles/Battle.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchSinglePokemonData } from "../api";


export function loader({params}) {
  
  const selectedPokemon = fetchSinglePokemonData(params.id);
  const vilan = fetchSinglePokemonData(params.enemyId);

  return Promise.all([selectedPokemon, vilan])
  .then(([playerPokemon, enemyPokemon]) => {
    return { playerPokemon, enemyPokemon };
  })
}

const BattleField = () => {
  const [playerPokemon, setPlayerPokemon] = useState({
    playerId:null,
    playerName:null,
    playerAttack:null,
    playerHp:null
  });
  const [enemyPokemon, setEnemyPokemon] = useState({
    enemyId:null,
    enemyName:null,
    enemyAttack:null,
    enemyHp:null
  });
  const [log, setLog] = useState([]);
  const [isDone, setIsDone] = useState(false);
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
    const playerDamage = Math.floor(Math.random() * playerPokemon.playerAttack);
    const enemyDamage = Math.floor(Math.random() * enemyPokemon.enemyAttack);
  
    setPlayerPokemon(prevState => {
      const newPlayerHp = Math.max(prevState.playerHp - enemyDamage, 0);
      return {...prevState, playerHp: newPlayerHp};
    });
  
    setEnemyPokemon(prevState => {
      const newEnemyHp = Math.max(prevState.enemyHp - playerDamage, 0);
      return {...prevState, enemyHp: newEnemyHp}
    });
  
    setLog((prevLog) => [
      ...prevLog,
      `${playerPokemon.playerName} deals ${playerDamage} damage!`,
      `${enemyPokemon.enemyName} deals ${enemyDamage} damage!`,
    ]);
  
    // Use pokemon speed
    if (playerPokemon.playerHp - enemyDamage <= 0) {
      setLog((prevState) => [...prevState, `${enemyPokemon.enemyName} wins!`]);
      setIsDone(true);
    } else if (enemyPokemon.enemyHp - playerDamage <= 0) {
      setLog((prevState) => [...prevState, `${playerPokemon.playerName} wins!`]);
      setIsDone(true);
    }
  };

  const handleEscape = () => {
    navigate("/pokemon");
    setPlayerPokemon({
      playerId:null,
      playerName:null,
      playerAttack:null,
      playerHp:null
    });
    setEnemyPokemon({
      enemyId:null,
      enemyName:null,
      enemyAttack:null,
      enemyHp:null
    });
    setLog([]);
  };

  console.log(playerStats)

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
      <button 
        className="battle-btn" 
        onClick={handleAttack} 
        style={{display: isDone ? "none" : "block"}}>
        Attack
      </button>
      <button className="battle-btn" onClick={handleEscape}>Escape</button>
      <div className="battle-health">
        {playerPokemon && <p className="battle-p">{`${playerName}: ${playerPokemon.playerHp} HP`}</p>}
        {enemyPokemon && <p className="battle-p">{`${enemyName}: ${enemyPokemon.enemyHp} HP`}</p>}
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