import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PokemonAbility from './Figure/PokemonAbility.tsx';
import PokemonType from './Figure/PokemonType.tsx';
import PokemonStats from './Figure/PokemonStats.tsx';
import styles from './PokemonCurrent.module.css';

function PokemonCurrent() {
  const { page, name } = useParams();
  const [currentPokemon, setCurrentPokemon] = useState({
    id: 0,
    name: '',
    image: '',
    abilities: [],
    stats: [],
    types: [],
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((json) => {
        setCurrentPokemon({
          id: json.id,
          name: json.name,
          abilities: json.abilities,
          image: json.sprites?.other?.['official-artwork']?.front_default,
          stats: json.stats,
          types: json.types,
        });
      });
  }, [name]);

  return (
    <div className={styles.wrapper}>
      <img src={currentPokemon.image} width="300" height="300" alt={currentPokemon.name} />
      <div>
        <h4 className={styles.title}>{name}</h4>
        <PokemonType types={currentPokemon.types} />
        <PokemonAbility abilities={currentPokemon.abilities} />
        <PokemonStats stats={currentPokemon.stats} />
      </div>
      <NavLink className={styles.close} to={`/page/${page && +page}`}>
        +
      </NavLink>
    </div>
  );
}

export default PokemonCurrent;
