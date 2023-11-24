import Link from 'next/link';
import clearImageUrl from '../../helper/clearImageUrl.tsx';
import { PokemonInformation } from '../../interfaces/Pokemon.ts';
import styles from './PokemonsList.module.css';

interface PokemonsListProps {
  list: PokemonInformation[];
  page: string;
  limit: string;
}

function PokemonsList({ list, page, limit }: PokemonsListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {list &&
          list.map((item: PokemonInformation) => (
            <Link
              key={item.name}
              className={styles.pokemon}
              href={`${page}?limit=${limit}/pokemon/${item.name}`}
              onClick={() => {
                // TODO: logic to display name on the search
                localStorage.setItem('request', item.name as string);
              }}
            >
              <img src={clearImageUrl(item.image)} width="150" height="150" alt={item.name} />
              <h4 className={styles.title}>{item.name}</h4>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default PokemonsList;
