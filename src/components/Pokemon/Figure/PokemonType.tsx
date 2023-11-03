import { PokemonTypeProps } from '../../../interfaces/Pokemon.ts';
import styles from './PokemonType.module.css';

function PokemonType({ types }: PokemonTypeProps) {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Type:</h3>
      <div className={styles.types}>
        {types.map((item) => (
          <span key={item.type.name}>{item.type.name}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonType;
