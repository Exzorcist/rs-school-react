import { createContext, useContext } from 'react';
import { SearchProviderData } from '../interfaces/Provider.js';

const SearchContext = createContext<SearchProviderData | null>(null);

export const SearchProvider = SearchContext.Provider;

export const useSearchContext = () => {
  const data = useContext(SearchContext);

  if (!data) {
    throw new Error('Can not "useSearchContext" outside of the "SearchProvider"');
  } else {
    return data;
  }
};
