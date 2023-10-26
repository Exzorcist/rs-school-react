import React from 'react';
import './Item.css';

class Item extends React.PureComponent {
  render() {
    const { name, image, abilities, stats, types } = this.props;

    return (
      <div className="Item">
        <img src={image} width="150" height="150" alt={name} loading="lazy" />
        <div>
          <h4>{name}</h4>
          <div />
        </div>
      </div>
    );
  }
}

export default Item;
