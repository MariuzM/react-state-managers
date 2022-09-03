import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';

import './styles/_index.css';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
