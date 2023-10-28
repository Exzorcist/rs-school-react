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
  onClick?: () => void;
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
  clearPokemonList: () => void;
  setPokemonList: (data: PokemonInformation) => void;
  setCurrentPokemon: (data: PokemonInformation) => void;
  setSearchRequest: (data: string, callback: () => void) => void;
  setMode: (data: Mode) => void;
  setIsLoading: (data: boolean) => void;
  searchRequset: string;
}

export interface ResultProps {
  pokemonList: PokemonInformation[];
  currentPokemon: PokemonInformation;
  mode: Mode;
  setSearchRequest: (data: string, callback: () => void) => void;
}

export type Mode = 'list' | 'current';

export interface LoaderProps {
  isLoading: boolean;
}
