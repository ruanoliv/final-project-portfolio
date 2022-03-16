import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
