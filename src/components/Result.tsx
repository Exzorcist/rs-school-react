import React from 'react';
import './Result.css';

import Item from './Item.tsx';

import { ResultProps, PokemonInformation } from '../interfaces/CommonTypes.ts';

class Result extends React.PureComponent<ResultProps> {
  render() {
    const { pokemonList, currentPokemon, mode } = this.props;

    return (
      <div className="ResultInfo">
        {mode === 'current' && (
          <Item
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
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              abilities={item.abilities}
              stats={item.stats}
              types={item.types}
              mode={mode}
            />
          ))}
      </div>
    );
  }
}

export default Result;
