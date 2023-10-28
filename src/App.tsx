import React from 'react';
import './App.css';

import Search from './components/Search.tsx';
import Result from './components/Result.tsx';

import { PokemonInformation, AppStateType, Mode } from './interfaces/CommonTypes.ts';

class App extends React.PureComponent<AppStateType> {
  state = {
    mode: 'list' as Mode, // list | current
    pokemonList: [] as PokemonInformation[],
    currentPokemon: {} as PokemonInformation,
  };

  setPokemonList = (data: PokemonInformation): void => {
    this.setState((prev: AppStateType) => ({
      pokemonList: [...prev.pokemonList, data],
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

  render() {
    const { pokemonList, currentPokemon, mode } = this.state;

    return (
      <div className="App">
        <Search
          setPokemonList={this.setPokemonList}
          setCurrentPokemon={this.setCurrentPokemon}
          setMode={this.setMode}
        />
        <Result pokemonList={pokemonList} currentPokemon={currentPokemon} mode={mode} />
      </div>
    );
  }
}

export default App;
