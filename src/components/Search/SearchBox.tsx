import React, { FormEvent } from 'react';
import styles from './SearchBox.module.css';
import { SearchBoxProps } from '../../interfaces/Search.ts';

class SearchBox extends React.PureComponent<SearchBoxProps> {
  inputEvent = (event: FormEvent<HTMLInputElement>): void => {
    const { setSearchRequest, getPokemonData } = this.props;
    const request = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();

    setSearchRequest(request, () => {
      localStorage.setItem('last-request', request);
      if (!request) getPokemonData();
    });
  };

  render() {
    const { searchRequset, getPokemonData } = this.props;

    return (
      <div className={styles.box}>
        <input
          type="search"
          className={styles.input}
          placeholder="For example: charmeleon or 142"
          value={searchRequset}
          onInput={this.inputEvent}
        />
        <button type="button" className={styles.button} onClick={getPokemonData}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBox;
