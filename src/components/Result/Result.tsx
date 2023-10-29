import React from 'react';
import Pokemon from '../Pokemon/Pokemon.tsx';

import { PokemonInformation } from '../../interfaces/Pokemon.ts';
import { ResultProps } from '../../interfaces/Result.ts';

import styles from './Result.module.css';

class Result extends React.PureComponent<ResultProps> {
  render() {
    const { pokemonList, currentPokemon, mode, setSearchRequest } = this.props;

    return (
      <div className={styles.box}>
        <div className={`${styles.screen} ${mode === 'list' ? styles.list : styles.current}`}>
          {mode === 'current' && (
            <Pokemon
              id={currentPokemon.id}
              name={currentPokemon.name}
              image={currentPokemon.image}
              abilities={currentPokemon.abilities}
              stats={currentPokemon.stats}
              types={currentPokemon.types}
              mode={mode}
            />
          )}
          {mode === 'list' &&
            pokemonList.map((item: PokemonInformation) => (
              <Pokemon
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                abilities={item.abilities}
                stats={item.stats}
                types={item.types}
                mode={mode}
                clickEvent={setSearchRequest}
              />
            ))}
        </div>

        <div className={styles.panel}>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

export default Result;
