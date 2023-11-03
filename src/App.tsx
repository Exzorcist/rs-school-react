import { useState } from 'react';

import Search from './components/Search/Search.tsx';
import Result from './components/Result/Result.tsx';
import Loader from './components/Ui/Loader.tsx';
import ErrorBoundaryButton from './components/ErrorBoundary/ErrorBoundaryButton.tsx';

import { PokemonInformation, Mode } from './interfaces/Pokemon.ts';

import './App.css';

function App() {
  const [mode, setMode] = useState<Mode>('list');
  const [pokemonList, setPokemonList] = useState<PokemonInformation[] | []>([]);
  const [currentPokemon, setCurrentPokemon] = useState<PokemonInformation>({
    id: 0,
    name: '',
    image: '',
    abilities: [],
    stats: [],
    types: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isErrorBoundary, setIsErrorBoundary] = useState<boolean>(false);
  const [searchRequset, setSearchRequest] = useState<string>(
    localStorage.getItem('last-request') || ''
  );

  // Change component state
  const updatePokemonList = (data: PokemonInformation | []): void => {
    setPokemonList((previous: PokemonInformation[] | []): PokemonInformation[] | [] =>
      !Array.isArray(data) ? [...previous, data] : []
    );
  };

  return (
    <div className="App">
      <Search
        setPokemonList={updatePokemonList}
        setCurrentPokemon={setCurrentPokemon}
        setMode={setMode}
        searchRequset={searchRequset}
        setSearchRequest={setSearchRequest}
        setIsLoading={setIsLoading}
        isErrorBoundary={isErrorBoundary}
      />
      <Result
        pokemonList={pokemonList}
        currentPokemon={currentPokemon}
        mode={mode}
        setSearchRequest={setSearchRequest}
      />
      <Loader isLoading={isLoading} />

      <ErrorBoundaryButton
        setIsErrorBoundary={setIsErrorBoundary}
        isErrorBoundary={isErrorBoundary}
      />
    </div>
  );
}

export default App;
