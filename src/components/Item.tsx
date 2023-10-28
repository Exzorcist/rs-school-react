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
            <img src={image} width="300" height="300" alt={name} />
            <div>
              <h4 className="ItemName">{name}</h4>
              <div className="ItemTypes">
                <h3>Type:</h3>
                {types.map((item) => (
                  <span key={item.type.name}>{item.type.name}</span>
                ))}
              </div>
              <div className="ItemStats">
                {stats.map((item) => (
                  <div key={item.stat.name}>
                    <span>{item.stat.name}</span>
                    <span>{item.base_stat}</span>
                  </div>
                ))}
              </div>
              <div className="ItemAbility">
                <h3>Abilities:</h3>
                <div>
                  {abilities.map((item) => (
                    <span key={item.ability.name}>{item.ability.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        {mode === 'list' && (
          <>
            <img src={image} width="150" height="150" alt={name} />
            <h4>{name}</h4>
          </>
        )}
      </div>
    );
  }
}

export default Item;
