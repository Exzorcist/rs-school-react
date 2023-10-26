import React from 'react';
import './App.css';

import Search from './components/Search.tsx';
// import Result from './components/Result.tsx';

import { PokemonInformation, AppStateType } from './interfaces/CommonTypes.ts';

class App extends React.PureComponent<AppStateType> {
  state = {
    // isFullRequest: true,
    allPokemons: [] as PokemonInformation[],
    // pokemon: {},
  };

  // setIsFullRequest = (value: boolean): void => {
  //   this.setState({ isFullRequest: value });
  // };

  // setPokemonData = (data: boolean): void => {
  //   this.setState({ pokemon: data });
  // };

  setAllPokemons = (data: PokemonInformation): void => {
    this.setState(
      (prev: AppStateType): AppStateType => ({
        allPokemons: [...prev.allPokemons, data],
      })
    );
  };

  render() {
    // const { isFullRequest, allPokemon } = this.state;
    // const { isFullRequest, pokemon, allPokemon } = this.state;

    return (
      <div className="App">
        <Search setAllPokemons={this.setAllPokemons} />

        {/* <Result isFullRequest={isFullRequest} pokemon={pokemon} allPokemon={allPokemon} /> */}
      </div>
    );
  }
}

export default App;
