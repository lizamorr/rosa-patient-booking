import React from 'react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

try {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('root')
  );
} catch (error) {
  console.log(error);
}
