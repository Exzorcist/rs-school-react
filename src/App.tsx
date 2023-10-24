import React from 'react';
import './App.css';

import Description from './components/Description.tsx';
import Search from './components/Search.tsx';
import Result from './components/Result.tsx';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Description />
        <Search />
        <Result />
      </div>
    );
  }
}

export default App;
