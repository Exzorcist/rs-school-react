import React from 'react';
import './Loader.css';
import { LoaderProps } from '../interfaces/CommonTypes.ts';

class Loader extends React.PureComponent<LoaderProps> {
  render() {
    const { isLoading } = this.props;

    return (
      <div className={`Loader ${isLoading ? 'show' : ''}`}>
        <div className="LoaderIcon">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <h5>Please wait ...</h5>
      </div>
    );
  }
}

export default Loader;
