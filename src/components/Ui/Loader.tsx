import React from 'react';
import LoaderIcon from './LoaderIcon.tsx';
import { LoaderProps } from '../../interfaces/Ui.ts';
import styles from './Loader.module.css';

class Loader extends React.PureComponent<LoaderProps> {
  render() {
    const { isLoading } = this.props;

    return (
      <div className={`${styles.loader} ${isLoading ? styles.show : ''}`}>
        <LoaderIcon />
        <h5 className={styles.title}>Loading. Please wait ...</h5>
      </div>
    );
  }
}

export default Loader;
