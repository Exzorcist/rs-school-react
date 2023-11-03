import { PokemonAbilityProps } from '../../../interfaces/Pokemon.ts';
import styles from './PokemonAbility.module.css';

function PokemonAbility({ abilities }: PokemonAbilityProps) {
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
