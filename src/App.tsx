import React from 'react';
import './App.css';

import Search from './components/Search.tsx';
import Result from './components/Result.tsx';
import Loader from './components/Loader.tsx';

import { PokemonInformation, ResultProps, Mode } from './interfaces/CommonTypes.ts';

class App extends React.PureComponent {
  state = {
    mode: 'list' as Mode, // list | current
    pokemonList: [] as PokemonInformation[],
    currentPokemon: {} as PokemonInformation,
    searchRequset: '' as string,
    isLoading: false as boolean,
  };

  setPokemonList = (data: PokemonInformation): void => {
    this.setState((prev: ResultProps) => ({
      pokemonList: [...prev.pokemonList, data],
    }));
  };

  clearPokemonList = (): void => {
    this.setState(() => ({
      pokemonList: [],
    }));
  };

  setCurrentPokemon = (data: PokemonInformation): void => {
    this.setState(() => ({
      currentPokemon: { ...data },
    }));
  };

  setMode = (data: Mode): void => {
    this.setState(() => ({
      mode: data,
    }));
  };

  setIsLoading = (data: boolean): void => {
    this.setState(() => ({
      isLoading: data,
    }));
  };

  setSearchRequest = (data: string, callback: () => void): void => {
    this.setState(
      {
        searchRequset: data,
      },
      () => {
        callback();
      }
    );
  };

  render() {
    const { pokemonList, currentPokemon, mode, searchRequset, isLoading } = this.state;

    return (
      <div className="App">
        <Search
          setPokemonList={this.setPokemonList}
          clearPokemonList={this.clearPokemonList}
          setCurrentPokemon={this.setCurrentPokemon}
          setMode={this.setMode}
          searchRequset={searchRequset}
          setSearchRequest={this.setSearchRequest}
          setIsLoading={this.setIsLoading}
        />
        <Result
          pokemonList={pokemonList}
          currentPokemon={currentPokemon}
          mode={mode}
          setSearchRequest={this.setSearchRequest}
        />
        <Loader isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
