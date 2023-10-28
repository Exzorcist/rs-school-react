export interface PokemonShortInformation {
  name: string;
  url: string;
}

export interface PokemonInformation {
  id: number;
  name: string;
  image: string;
  abilities: PokemonAbilities[];
  stats: PokemonStats[];
  types: PokemonTypes[];
  sprites?: {
    other?: {
      'official-artwork'?: {
        front_default?: string;
      };
    };
  };
  mode?: Mode;
}

export interface PokemonAbilities {
  ability: {
    name: string;
  };
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonTypes {
  type: {
    name: string;
  };
}

export interface SearchProps {
  setPokemonList: (data: PokemonInformation) => void;
  setCurrentPokemon: (data: PokemonInformation) => void;
  setMode: (data: Mode) => void;
}

export interface AppStateType {
  pokemonList: PokemonInformation[];
}

export interface ResultProps {
  pokemonList: PokemonInformation[];
  currentPokemon: PokemonInformation;
  mode: Mode;
}

export type Mode = 'list' | 'current';
