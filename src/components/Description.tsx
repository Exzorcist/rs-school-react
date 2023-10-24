import React from 'react';
import './Description.css';

class Description extends React.PureComponent {
  render() {
    return (
      <div className="Description">
        <h1>Find your pokemon!</h1>
        <h3>Enter a pokemon name to see general information about it.</h3>
        <div>
          <h5>Example of search request:</h5>
          <ul>
            <li>bulbasaur</li>
            <li>ivysaur</li>
            <li>charmander</li>
            <li>charmeleon</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Description;
