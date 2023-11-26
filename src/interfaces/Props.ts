import { PokemonInformation } from './Pokemon.ts';

export interface IMainPageProps {
  data: {
    limit: string;
    page: string;
    offset: number;
    prev: string;
    next: string;
    list: PokemonInformation[];
    pokemon: PokemonInformation;
    request: string;
  };
}

export interface IPokemonsListProps {
  list: PokemonInformation[];
  page: string;
  limit: string;
  children?: React.ReactNode;
}

export interface IPokemonCurrentProps {
  pokemon: PokemonInformation;
  page: string;
  limit: string;
}

export interface ISearchProps {
  request: string;
  page: string;
  limit: string;
}

export interface IPaginationProps {
  page: string;
  next: string;
  prev: string;
  limit: string;
}

export interface ISelectProps {
  limit: string;
  setIsLoading: (value: boolean) => void;
}

export interface ILoaderProps {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}
