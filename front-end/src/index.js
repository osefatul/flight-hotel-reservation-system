import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import store from "./store";
import './index.css';
import App from './App';


// Stripe library functions
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Provider>
    </BrowserRouter>
</React.StrictMode>
);
