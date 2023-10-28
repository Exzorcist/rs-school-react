import React from 'react';
import './Item.css';

import { PokemonInformation } from '../interfaces/CommonTypes.ts';

class Item extends React.PureComponent<PokemonInformation> {
  render() {
    const { name, image, abilities, stats, types, mode } = this.props;

    return (
      <div className={`Item ${mode}`}>
        {mode === 'current' && (
          <>
            <img src={image} width="150" height="150" alt={name} loading="lazy" />
            <div>
              <h4 className="ItemName">{name}</h4>
              <div className="ItemTypes">
                {types.map((item) => (
                  <span key={item.type.name}>{item.type.name}</span>
                ))}
              </div>
              <div className="ItemStats">
                {stats.map((item) => (
                  <div key={item.stat.name}>
                    <span>{item.stat.name}</span>
                    <span> - </span>
                    <span>{item.base_stat}</span>
                  </div>
                ))}
              </div>
              <div className="ItemAbility">
                {abilities.map((item) => (
                  <span key={item.ability.name}>{item.ability.name}</span>
                ))}
              </div>
            </div>
          </>
        )}
        {mode === 'list' && (
          <>
            <img src={image} width="150" height="150" alt={name} loading="lazy" />
            <div>
              <h4>{name}</h4>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Item;
