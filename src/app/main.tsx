import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/globals.scss';
import App from '@/app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
