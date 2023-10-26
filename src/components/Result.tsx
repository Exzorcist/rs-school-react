import React from 'react';
import './Result.css';

// import Item from './Item.tsx';

import { PokemonResult } from '../interfaces/CommonTypes.ts';

class Result extends React.PureComponent<PokemonResult> {
  // state = {
  //   items: [],
  //   requestUrl: 'https://pokeapi.co/api/v2/pokemon/',
  // };

  // hasMounted = false;

  // componentDidMount() {
  //   const { isFullRequest } = this.props;

  //   if (!this.hasMounted) {
  //     this.hasMounted = true;
  //     this.getPokemons();

  //     console.log(isFullRequest);
  //   }
  // }

  // getPokemons = () => {
  //   const { requestUrl } = this.state;

  //   fetch(requestUrl)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const arrayOfPromise = [];

  //       json.results.forEach((item) => {
  //         arrayOfPromise.push(fetch(item.url).then((resp) => resp.json()));
  //       });

  //       Promise.all(arrayOfPromise).then((results) => {
  //         results.forEach((pokemon) => {
  //           this.parsePokemonData(pokemon);
  //         });
  //       });
  //     });
  // };

  // parsePokemonData = (pokemon) => {
  //   const data = {
  //     id: pokemon.id,
  //     name: pokemon.name,
  //     abilities: pokemon.abilities,
  //     image: pokemon.sprites.other['official-artwork'].front_default,
  //     stats: pokemon.stats,
  //     types: pokemon.types,
  //   };

  //   this.setState((prev) => ({
  //     items: [...prev.items, data],
  //   }));
  // };

  render() {
    return (
      <div className="ResultInfo">
        {/* {this.state.items.map((item) => (
          <Item key={item.id} {...item} />
        ))} */}
      </div>
    );
  }
}

export default Result;
