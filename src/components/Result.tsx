import React from 'react';
import './Result.css';

import Item from './Item.tsx';

import { ResultProps, PokemonInformation } from '../interfaces/CommonTypes.ts';

class Result extends React.PureComponent<ResultProps> {
  render() {
    const { pokemonList, currentPokemon, mode, setSearchRequest } = this.props;

    return (
      <div className={`ResultInfo ${mode}`}>
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
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() =>
                setSearchRequest(item.name, () => {
                  localStorage.setItem('last-request', item.name);
                })
              }
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setSearchRequest(item.name, () => {
                    localStorage.setItem('last-request', item.name);
                  });
                }
              }}
            >
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                abilities={item.abilities}
                stats={item.stats}
                types={item.types}
                mode={mode}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default Result;
