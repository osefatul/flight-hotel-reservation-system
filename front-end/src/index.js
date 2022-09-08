import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import store from "./store";
import './index.css';
import App from './App';

import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <CookiesProvider>
          <App />
        </CookiesProvider>,
      </Provider>
    </BrowserRouter>
</React.StrictMode>
);
