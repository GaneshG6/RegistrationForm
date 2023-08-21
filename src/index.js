import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyWebsite from './myWebsite';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  
  </React.StrictMode>
);

reportWebVitals();
