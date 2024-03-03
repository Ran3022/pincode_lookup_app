// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Your main app component

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
