import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css';
import { BrowserRouter } from 'react-router-dom';


document.body.style.backgroundColor = "#A4D0A4"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>


);


