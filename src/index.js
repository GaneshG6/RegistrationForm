import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import CrudOperation from './CrudOperation';
import Router from './RouterLearn/Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CrudOperation />
  </React.StrictMode>
);

reportWebVitals();
