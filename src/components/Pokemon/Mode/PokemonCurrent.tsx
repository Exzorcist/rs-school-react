import React from 'react';
import PokemonType from '../Figure/PokemonType.tsx';
import PokemonStats from '../Figure/PokemonStats.tsx';
import PokemonAbility from '../Figure/PokemonAbility.tsx';

import { PokemonCurrentProps } from '../../../interfaces/Pokemon.ts';
import styles from './PokemonCurrent.module.css';

class PokemonCurrent extends React.PureComponent<PokemonCurrentProps> {
  render() {
    const { name, image, abilities, stats, types } = this.props;

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
}

export default PokemonCurrent;
