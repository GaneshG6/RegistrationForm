import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import StopWatch from './StopWatch';
import UseEffect from './Useeffect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <StopWatch/>
  {/* <UseEffect /> */}
  </React.StrictMode>
);

reportWebVitals();
