export interface PokemonList {
  previous: string | null;
  next: string | null;
  results: PokemonShortInformation[];
}

export interface PokemonShortInformation {
  name: string;
  url: string;
}

export interface PokemonInformation {
  id?: number;
  name?: string;
  image?: string;
  abilities?: PokemonAbilities[];
  stats?: PokemonStats[];
  types?: PokemonType[];
  sprites?: {
    other?: {
      'official-artwork'?: {
        front_default?: string;
      };
    };
  };
}

export interface OutletContext {
  setCurrentPage: (data: string | undefined) => void;
  setIsFirstPage: (data: boolean) => void;
  setIsLastPage: (data: boolean) => void;
  setIsPagerShow: (data: boolean) => void;
  currentLimit: number;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonAbilities {
  ability: {
    name: string;
  };
}
