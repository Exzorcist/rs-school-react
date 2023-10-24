import React from 'react';
import './Search.css';

class Search extends React.PureComponent {
  render() {
    return (
      <div className="Search">
        <input type="search" placeholder="Please type pokemon name ..." />
        <button type="button">Search</button>
      </div>
    );
  }
}

export default Search;
