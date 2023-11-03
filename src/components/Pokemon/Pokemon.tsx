import PokemonCurrent from './Mode/PokemonCurrent.tsx';
import PokemonList from './Mode/PokemonList.tsx';

import { PokemonInformation } from '../../interfaces/Pokemon.ts';

function Pokemon(props: PokemonInformation) {
  const { name, image, abilities, stats, types, mode, setSearchRequest } = props;

  return (
    <>
      {mode === 'current' && (
        <PokemonCurrent
          name={name}
          image={image}
          abilities={abilities}
          stats={stats}
          types={types}
        />
      )}
      {mode === 'list' && setSearchRequest && (
        <PokemonList
          name={name}
          image={image}
          setSearchRequest={(): void => setSearchRequest(name)}
        />
      )}
    </>
  );
}

export default Pokemon;
