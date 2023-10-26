export interface PokemonResult {
  isFullRequest: boolean;
  currentPokemon: PokemonInformation;
  allPokemons: PokemonInformation[];
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
  setAllPokemons: (data: PokemonInformation) => void;
}

export interface AppStateType {
  allPokemons: PokemonInformation[];
}
