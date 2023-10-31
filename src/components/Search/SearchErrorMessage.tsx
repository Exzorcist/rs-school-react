import React from 'react';
import styles from './SearchErrorMessage.module.css';
import { SearchErrorProps } from '../../interfaces/Search.ts';

class SearchErrorMessage extends React.PureComponent<SearchErrorProps> {
  render() {
    const { isErrorVisible, setIsErrorVisible } = this.props;

    return (
      <div className={`${styles.error} ${isErrorVisible ? styles.show : ''}`}>
        No such pokemon exists. Please check the name of your pokemon.
        <span
          role="button"
          tabIndex={0}
          className={styles.close}
          onClick={() => setIsErrorVisible(false)}
          onKeyPress={() => null}
        >
          +
        </span>
      </div>
    );
  }
}

export default SearchErrorMessage;
