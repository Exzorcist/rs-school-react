import { PokemonInformation, Mode } from './Pokemon.ts';

export interface ResultProps {
  pokemonList: PokemonInformation[];
  currentPokemon: PokemonInformation;
  mode: Mode;
  setSearchRequest: (data: string, callback: () => void) => void;
}
