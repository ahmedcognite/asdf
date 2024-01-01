import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app';

import './translations/i18nWithLocize';
// uncomment if you want to use local translation files
// and comment the above import
// import './translations/i18nLocal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
