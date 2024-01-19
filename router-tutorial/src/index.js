import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Corrected import
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker'; // Corrected import

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//serviceWorker.unregister();