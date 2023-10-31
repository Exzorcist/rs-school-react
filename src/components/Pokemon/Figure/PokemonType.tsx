import React from 'react';
import { PokemonTypeProps } from '../../../interfaces/Pokemon.ts';
import styles from './PokemonType.module.css';

class PokemonType extends React.PureComponent<PokemonTypeProps> {
  render() {
    const { types } = this.props;

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
}

export default PokemonType;
