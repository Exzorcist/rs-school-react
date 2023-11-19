import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonList } from '../../interfaces/Pokemon.ts';

interface RequestParam {
  offset: number;
  limit: number;
}

const customFetchFn = async (input: RequestInfo, init?: RequestInit) => {
  return window.fetch(input, init);
};

const PokemonAPI = createApi({
  reducerPath: 'pokemonAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon',
    fetchFn: customFetchFn,
  }),
  endpoints: (build) => ({
    getPokemonList: build.query<PokemonList, RequestParam>({
      query: ({ offset, limit }) => `/?offset=${offset}&limit=${limit}`,
    }),

    getPokemonData: build.query({
      query: (name) => `/${name}`,
    }),
  }),
});

export default PokemonAPI;
