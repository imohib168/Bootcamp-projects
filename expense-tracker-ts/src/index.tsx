import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { TransProvider } from './Context/TransactionContext';

ReactDOM.render(
  <TransProvider>
    <App />
  </TransProvider>,
  document.getElementById('root')
);
