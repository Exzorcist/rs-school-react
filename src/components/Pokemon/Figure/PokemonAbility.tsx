import { usePokemonCurrentContext } from '../../../provider/PokemonCurrentProvider.tsx';
import styles from './PokemonAbility.module.css';

function PokemonAbility() {
  const { abilities } = usePokemonCurrentContext();

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Abilities:</h3>
      <div className={styles.abilities}>
        {abilities.map((item) => (
          <span key={item.ability.name}>{item.ability.name}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonAbility;
