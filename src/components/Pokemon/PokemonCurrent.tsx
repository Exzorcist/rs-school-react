import Link from 'next/link';

import PokemonAbility from './Figure/PokemonAbility.tsx';
import PokemonType from './Figure/PokemonType.tsx';
import PokemonStats from './Figure/PokemonStats.tsx';
import NotFound from '../NotFound/NotFound.tsx';

import { IPokemonCurrentProps } from '../../interfaces/Props.ts';
import styles from './PokemonCurrent.module.css';

function PokemonCurrent({ pokemon, page, limit }: IPokemonCurrentProps) {
  return (
    <div className={styles.wrapper}>
      {pokemon.id && (
        <>
          <img
            className={styles.image}
            src={pokemon.image}
            width="300"
            height="300"
            alt={pokemon.name}
          />
          <div>
            <h4 className={styles.title}>{pokemon.name}</h4>
            <PokemonType types={pokemon.types} />
            <PokemonAbility abilities={pokemon.abilities} />
            <PokemonStats stats={pokemon.stats} />
          </div>
        </>
      )}

      {!pokemon.id && <NotFound />}

      <Link
        href={`/page/${page}?limit=${limit}`}
        className={styles.close}
        onClick={() => localStorage.setItem('request', '')}
      >
        +
      </Link>
    </div>
  );
}

export default PokemonCurrent;
