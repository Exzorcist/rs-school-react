import React, { FormEvent } from 'react';
import './Search.css';
import {
  SearchProps,
  PokemonInformation,
  PokemonShortInformation,
} from '../interfaces/CommonTypes.ts';

class Search extends React.PureComponent<SearchProps> {
  state = {
    requestUrl: 'https://pokeapi.co/api/v2/pokemon/' as string,
    searchRequset: '' as string,
  };

  hasMounted = false;

  componentDidMount() {
    if (!this.hasMounted) {
      this.hasMounted = true;
      this.getPokemonData();
    }
  }

  getPokemonData = () => {
    const { requestUrl, searchRequset } = this.state;
    const { setCurrentPokemon, setMode } = this.props;

    fetch(`${requestUrl}${searchRequset}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.results) {
          setMode('list');
          this.getListOfPokemon(json.results);
        } else {
          setMode('current');
          this.getCurrentPokenom(json, setCurrentPokemon);
        }
      });
  };

  getListOfPokemon = (array: PokemonShortInformation[]): void => {
    const { setPokemonList } = this.props;
    const arrayOfPromise: Promise<PokemonInformation>[] = [];

    array.forEach((item: PokemonShortInformation): void => {
      arrayOfPromise.push(fetch(item.url).then((resp) => resp.json()));
    });

    Promise.all(arrayOfPromise).then((results): void => {
      results.forEach((pokemon): void => {
        this.getCurrentPokenom(pokemon, setPokemonList);
      });
    });
  };

  getCurrentPokenom = (
    pokemon: PokemonInformation,
    callback: (pokemon: PokemonInformation) => void
  ): void => {
    const sprites = pokemon.sprites?.other?.['official-artwork']?.front_default;

    const data: PokemonInformation = {
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities,
      image: sprites as string,
      stats: pokemon.stats,
      types: pokemon.types,
    };

    callback(data);
  };

  inputChangeHandle = (event: FormEvent<HTMLInputElement>): void => {
    this.setState({
      searchRequset: (event.target as HTMLInputElement).value.trim().toLocaleLowerCase(),
    });
  };

  render() {
    const { searchRequset } = this.state;

    return (
      <div className="Search">
        <h3>Enter a pokemon name to see general information about it.</h3>
        <div>
          <input
            type="search"
            placeholder="Please type pokemon name ..."
            value={searchRequset}
            onInput={this.inputChangeHandle}
          />
          <button type="button" onClick={this.getPokemonData}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
