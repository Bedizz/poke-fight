import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@radix-ui/themes/styles.css';
import './index.css'
import { Theme } from '@radix-ui/themes';

const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(
    <Theme>
      <App />
    </Theme>
)
