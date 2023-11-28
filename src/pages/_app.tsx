import { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary.tsx';
import '../styles/global.css';

function PokemonApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default PokemonApp;
