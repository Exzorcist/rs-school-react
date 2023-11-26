import Link from 'next/link';
import { PokemonInformation } from '../../interfaces/Pokemon.ts';
import { IPokemonsListProps } from '../../interfaces/Props.ts';
import styles from './PokemonsList.module.css';

function PokemonsList({ list, page, limit, children }: IPokemonsListProps) {
  return (
    <div className={styles.wrapper} data-testid="list">
      <div className={styles.list}>
        {list &&
          list.map((item: PokemonInformation) => (
            <Link
              key={item.name}
              className={styles.pokemon}
              href={`${page}?limit=${limit}&pokemon=${item.name}`}
              onClick={() => localStorage.setItem('request', item.name as string)}
            >
              <img src={item.image} width="150" height="150" alt={item.name} />
              <h4 className={styles.title}>{item.name}</h4>
            </Link>
          ))}
      </div>

      {children}
    </div>
  );
}

PokemonsList.defaultProps = {
  children: null,
};

export default PokemonsList;
