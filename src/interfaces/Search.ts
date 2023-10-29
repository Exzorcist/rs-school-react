import { PokemonInformation, Mode } from './Pokemon.ts';

export interface SearchProps {
  // clearPokemonList: () => void;
  setPokemonList: (data: PokemonInformation | []) => void;
  setCurrentPokemon: (data: PokemonInformation) => void;
  setSearchRequest: (data: string, callback: () => void) => void;
  setMode: (data: Mode) => void;
  setIsLoading: (data: boolean) => void;
  searchRequset: string;
}

export interface SearchErrorProps {
  isErrorVisible: boolean;
  setIsErrorVisible: (data: boolean) => void;
}

export interface SearchBoxProps {
  searchRequset: string;
  getPokemonData: () => void;
  setSearchRequest: (data: string, callback: () => void) => void;
}
