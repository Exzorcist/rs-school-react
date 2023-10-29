import React from 'react';

import Search from './components/Search/Search.tsx';
import Result from './components/Result/Result.tsx';
import Loader from './components/Ui/Loader.tsx';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import ErrorBoundaryButton from './components/ErrorBoundary/ErrorBoundaryButton.tsx';

import { PokemonInformation, Mode } from './interfaces/Pokemon.ts';
import { ResultProps } from './interfaces/Result.ts';

import './App.css';

class App extends React.PureComponent {
  state = {
    mode: 'list' as Mode, // list | current
    pokemonList: [] as PokemonInformation[],
    currentPokemon: {} as PokemonInformation,
    searchRequset: '' as string,
    isLoading: false as boolean,
    isErrorBoundary: false as boolean,
  };

  // Change component state
  setPokemonList = (data: PokemonInformation | []): void => {
    this.setState((prev: ResultProps) => ({
      pokemonList: !Array.isArray(data) ? [...prev.pokemonList, data] : [],
    }));
  };

  setCurrentPokemon = (data: PokemonInformation): void => {
    this.setState(() => ({ currentPokemon: { ...data } }));
  };

  setMode = (data: Mode): void => {
    this.setState(() => ({ mode: data }));
  };

  setIsLoading = (data: boolean): void => {
    this.setState(() => ({ isLoading: data }));
  };

  setSearchRequest = (data: string, callback: () => void): void => {
    this.setState(
      () => ({ searchRequset: data }),
      () => callback()
    );
  };

  setIsErrorBoundary = (data: boolean): void => {
    this.setState(() => ({ isErrorBoundary: data }));
  };

  render() {
    const { pokemonList, currentPokemon, mode } = this.state;
    const { searchRequset, isLoading, isErrorBoundary } = this.state;

    return (
      <div className="App">
        <ErrorBoundary>
          <Search
            setPokemonList={this.setPokemonList}
            setCurrentPokemon={this.setCurrentPokemon}
            setMode={this.setMode}
            searchRequset={searchRequset}
            setSearchRequest={this.setSearchRequest}
            setIsLoading={this.setIsLoading}
            isErrorBoundary={isErrorBoundary}
          />
          <Result
            pokemonList={pokemonList}
            currentPokemon={currentPokemon}
            mode={mode}
            setSearchRequest={this.setSearchRequest}
          />
          <Loader isLoading={isLoading} />
        </ErrorBoundary>

        <ErrorBoundaryButton
          setIsErrorBoundary={this.setIsErrorBoundary}
          isErrorBoundary={isErrorBoundary}
        />
      </div>
    );
  }
}

export default App;
