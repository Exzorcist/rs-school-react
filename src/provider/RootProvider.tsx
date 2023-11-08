import { createContext, useContext } from 'react';
import { RootProviderData } from '../interfaces/Provider.ts';

const RootContext = createContext<RootProviderData | null>(null);

export const RootProvider = RootContext.Provider;

export const useRootContext = () => {
  const data = useContext(RootContext);

  if (!data) {
    throw new Error('Can not "useRootContext" outside of the "RootProvider"');
  }

  return data;
};
