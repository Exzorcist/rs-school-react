import { PokemonType, PokemonStats, PokemonAbilities } from './Pokemon.ts';

export interface RootProviderData {
  currentPage: number;
  currentLimit: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isPagerShow: boolean;
  setCurrentPage: (page: number) => void;
  setCurrentLimit: (limit: number) => void;
  setIsFirstPage: (data: boolean) => void;
  setIsLastPage: (data: boolean) => void;
  setIsPagerShow: (data: boolean) => void;
}

export interface PokemonListProviderData {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

export interface PokemonCurrentProviderData {
  types: PokemonType[];
  stats: PokemonStats[];
  abilities: PokemonAbilities[];
}
