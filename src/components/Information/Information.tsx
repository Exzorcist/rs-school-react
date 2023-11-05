import { useRef } from 'react';
import styles from './Information.module.css';

function Information() {
  const docsLink = useRef<string>('https://pokeapi.co/docs/v2');

  return (
    <div className={styles.ps}>
      <h2>Attantion!</h2>
      <div>
        <p>
          There are limitations in the proposed API. It is not possible to send a request for a
          partial match.
        </p>
        <p>
          You can verify this by looking at the documentation:
          <a className={styles.link} href={docsLink.current} target="_blank" rel="noreferrer">
            {docsLink.current}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Information;
