import React from 'react';
import './Search.css';
import { SearchProps, PokemonInformation } from '../interfaces/CommonTypes.ts';

class Search extends React.PureComponent<SearchProps> {
  state = {
    requestUrl: 'https://pokeapi.co/api/v2/pokemon/' as string,
  };

  hasMounted = false;

  componentDidMount() {
    if (!this.hasMounted) {
      this.hasMounted = true;
      this.getAllPokemons();
    }
  }

  getAllPokemons = (): void => {
    const { requestUrl } = this.state;

    fetch(requestUrl)
      .then((response) => response.json())
      .then((json) => {
        const arrayOfPromise: Promise<PokemonInformation>[] = [];

        json.results.forEach((item: { [key: string]: string }): void => {
          arrayOfPromise.push(fetch(item.url).then((resp) => resp.json()));
        });

        Promise.all(arrayOfPromise).then((results): void => {
          results.forEach((pokemon): void => {
            this.getPokemonInfo(pokemon);
          });
        });
      });
  };

  getPokemonInfo = (pokemon: PokemonInformation): void => {
    const { setAllPokemons } = this.props;
    const sprites = pokemon.sprites?.other?.['official-artwork']?.front_default;

    const data: PokemonInformation = {
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities,
      image: sprites as string,
      stats: pokemon.stats,
      types: pokemon.types,
    };

    setAllPokemons(data);
  };

  render() {
    return (
      <div className="Search">
        <h3>Enter a pokemon name to see general information about it.</h3>
        <div>
          <input type="search" placeholder="Please type pokemon name ..." />
          <button type="button">Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
