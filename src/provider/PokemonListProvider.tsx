import { createContext, useContext } from 'react';
import { PokemonListProviderData } from '../interfaces/Provider.ts';

const PokemonListContext = createContext<PokemonListProviderData | null>(null);

export const PokemonListProvider = PokemonListContext.Provider;

export const usePokemonListContext = () => {
  const data = useContext(PokemonListContext);

  if (!data) {
    throw new Error('Can not "usePokemonListContext" outside of the "PokemonListProvider"');
  }

  return data;
};
