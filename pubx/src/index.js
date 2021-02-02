import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
      <App data={root.getAttribute('data-details')} />
  </React.StrictMode>, root)

