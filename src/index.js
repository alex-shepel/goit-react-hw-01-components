import ghpages from 'gh-pages';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ghpages.publish('dist', function (err) {});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
