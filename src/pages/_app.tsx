import { AppProps } from 'next/app';
import '../styles/global.css';

function PokemonApp({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}

export default PokemonApp;
