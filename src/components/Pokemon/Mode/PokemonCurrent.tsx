import PokemonType from '../Figure/PokemonType.tsx';
import PokemonStats from '../Figure/PokemonStats.tsx';
import PokemonAbility from '../Figure/PokemonAbility.tsx';

import { PokemonCurrentProps } from '../../../interfaces/Pokemon.ts';
import styles from './PokemonCurrent.module.css';

function PokemonCurrent(props: PokemonCurrentProps) {
  const { name, image, abilities, stats, types } = props;

  return (
    <>
      <img src={image} width="300" height="300" alt={name} />
      <div>
        <h4 className={styles.title}>{name}</h4>
        <PokemonType types={types} />
        <PokemonAbility abilities={abilities} />
        <PokemonStats stats={stats} />
      </div>
    </>
  );
}

export default PokemonCurrent;
