import { usePokemonCurrentContext } from '../../../provider/PokemonCurrentProvider.tsx';
import styles from './PokemonStats.module.css';

function PokemonStats() {
  const { stats } = usePokemonCurrentContext();

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Stats:</h3>
      <div className={styles.stats}>
        {stats.map((item) => (
          <div className={styles.stat} key={item.stat.name}>
            <span>{item.stat.name}</span>
            <span>{item.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonStats;
