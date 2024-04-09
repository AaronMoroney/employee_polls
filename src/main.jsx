import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './app/components/App'
import './css/index.css';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './features/theme/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
)
