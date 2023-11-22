import { AppProps } from 'next/app';
import '../styles/global.css';

function PokemonApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default PokemonApp;
