import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// https://reactrouter.com/en/main/start/tutorial
// its version 6
const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
