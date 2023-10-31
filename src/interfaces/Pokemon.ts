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
  types: PokemonType[];
  sprites?: {
    other?: {
      'official-artwork'?: {
        front_default?: string;
      };
    };
  };
  mode?: Mode;
  clickEvent?: (data: string, callback: () => void) => void;
}

export interface PokemonTypeProps {
  types: PokemonType[];
}

export interface PokemonStatsProps {
  stats: PokemonStats[];
}

export interface PokemonAbilityProps {
  abilities: PokemonAbilities[];
}

export interface PokemonListProps {
  name: string;
  image: string;
  clickEvent?: (data: string, callback: () => void) => void;
}

export interface PokemonCurrentProps {
  name: string;
  image: string;
  abilities: PokemonAbilities[];
  stats: PokemonStats[];
  types: PokemonType[];
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

export type Mode = 'list' | 'current';
