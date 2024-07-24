import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@assets/scss/main.scss';
import { TimerProvider } from './store/TimerContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TimerProvider>
      <App />
    </TimerProvider>
  </React.StrictMode>,
);
