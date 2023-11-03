import { PokemonInformation, Mode } from './Pokemon.ts';

export interface SearchProps {
  setPokemonList: (data: PokemonInformation | []) => void;
  setCurrentPokemon: (data: PokemonInformation) => void;
  setSearchRequest: (data: string) => void;
  setMode: (data: Mode) => void;
  setIsLoading: (data: boolean) => void;
  searchRequset: string;
  isErrorBoundary: boolean;
}

export interface SearchErrorProps {
  isErrorVisible: boolean;
  setIsErrorVisible: (data: boolean) => void;
}

export interface SearchBoxProps {
  searchRequset: string;
  getPokemonData: () => void;
  setSearchRequest: (data: string) => void;
}
