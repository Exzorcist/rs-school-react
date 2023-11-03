import { PokemonListProps } from '../../../interfaces/Pokemon.ts';
import styles from './PokemonList.module.css';

function PokemonList({ name, image, setSearchRequest }: PokemonListProps) {
  return (
    <div
      className={styles.pokemon}
      role="button"
      tabIndex={0}
      onClick={(): void => {
        setSearchRequest(name);
      }}
      onKeyPress={() => null}
    >
      <img src={image} width="150" height="150" alt={name} />
      <h4 className={styles.title}>{name}</h4>
    </div>
  );
}

export default PokemonList;
