import { PokemonStatsProps } from '../../../interfaces/Pokemon.ts';
import styles from './PokemonStats.module.css';

function PokemonStats({ stats }: PokemonStatsProps) {
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
