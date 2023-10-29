import React from 'react';
import PokemonCurrent from './Mode/PokemonCurrent.tsx';
import PokemonList from './Mode/PokemonList.tsx';

import { PokemonInformation } from '../../interfaces/Pokemon.ts';

class Pokemon extends React.PureComponent<PokemonInformation> {
  render() {
    const { name, image, abilities, stats, types, mode, clickEvent } = this.props;

    return (
      <>
        {mode === 'current' && (
          <PokemonCurrent
            name={name}
            image={image}
            abilities={abilities}
            stats={stats}
            types={types}
          />
        )}
        {mode === 'list' && <PokemonList name={name} image={image} clickEvent={clickEvent} />}
      </>
    );
  }
}

export default Pokemon;
