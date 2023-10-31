import React from 'react';
import { PokemonListProps } from '../../../interfaces/Pokemon.ts';
import styles from './PokemonList.module.css';

class PokemonList extends React.PureComponent<PokemonListProps> {
  render() {
    const { name, image, clickEvent } = this.props;

    return (
      <div
        className={styles.pokemon}
        role="button"
        tabIndex={0}
        onClick={() => clickEvent && clickEvent(name, () => null)}
        onKeyPress={() => null}
      >
        <img src={image} width="150" height="150" alt={name} />
        <h4 className={styles.title}>{name}</h4>
      </div>
    );
  }
}

export default PokemonList;
