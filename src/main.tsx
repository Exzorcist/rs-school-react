import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import App2 from './App2.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      {/* <App /> */}
      <App2 />
    </ErrorBoundary>
  </React.StrictMode>
);
