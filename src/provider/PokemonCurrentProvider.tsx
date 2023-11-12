import { createContext, useContext } from 'react';
import { PokemonCurrentProviderData } from '../interfaces/Provider.js';

const PokemonCurrentContext = createContext<PokemonCurrentProviderData | null>(null);

export const PokemonCurrentProvider = PokemonCurrentContext.Provider;

export const usePokemonCurrentContext = () => {
  const data = useContext(PokemonCurrentContext);

  if (!data) {
    throw new Error('Can not "usePokemonCurrentContext" outside of the "PokemonCurrentProvider"');
  } else {
    return data;
  }
};
