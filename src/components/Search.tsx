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
  };

  hasMounted = false;

  componentDidMount() {
    if (!this.hasMounted) {
      this.hasMounted = true;
      const { setSearchRequest } = this.props;

      setSearchRequest(localStorage.getItem('last-request') || '', this.getPokemonData);
    }
  }

  getPokemonData = () => {
    const { requestUrl } = this.state;
    const { setCurrentPokemon, clearPokemonList, setMode, searchRequset, setIsLoading } =
      this.props;

    setIsLoading(true);

    fetch(`${requestUrl}${searchRequset}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.results) {
          setMode('list');
          clearPokemonList();
          this.getListOfPokemon(json.results);
        } else {
          setMode('current');
          this.getCurrentPokenom(json, setCurrentPokemon);
        }
      });
  };

  getListOfPokemon = (array: PokemonShortInformation[]): void => {
    const { setPokemonList, setIsLoading } = this.props;
    const arrayOfPromise: Promise<PokemonInformation>[] = [];
    const delay = 1500;

    array.forEach((item: PokemonShortInformation): void => {
      arrayOfPromise.push(fetch(item.url).then((resp) => resp.json()));
    });

    Promise.all(arrayOfPromise).then((results): void => {
      results.forEach((pokemon): void => {
        this.getCurrentPokenom(pokemon, setPokemonList);
      });

      setTimeout(() => {
        setIsLoading(false);
      }, delay);
    });
  };

  getCurrentPokenom = (
    pokemon: PokemonInformation,
    callback: (pokemon: PokemonInformation) => void
  ): void => {
    const { setIsLoading } = this.props;
    const delay = 1500;
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

    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  };

  inputChangeHandle = (event: FormEvent<HTMLInputElement>): void => {
    const { setSearchRequest } = this.props;
    setSearchRequest((event.target as HTMLInputElement).value.trim().toLocaleLowerCase(), () => {
      this.saveRequestToLocalStorage();

      if (!(event.target as HTMLInputElement).value) {
        this.getPokemonData();
      }
    });
  };

  saveRequestToLocalStorage = () => {
    const { searchRequset } = this.props;
    localStorage.setItem('last-request', searchRequset);
  };

  render() {
    const { searchRequset } = this.props;

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
