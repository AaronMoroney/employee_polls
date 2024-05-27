import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux'

import App from './app/components/App';
import './css/index.css';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './features/theme/theme';
import rootReducer from '../reducer';

let store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk)
);

const rootElement = document.getElementById('root');

if(rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <ThemeProvider theme={darkTheme}>
            <App />
          </ThemeProvider>
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  )
}