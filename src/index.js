import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/styles.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router, RouterProvider,
} from "react-router-dom";

import router from './routes/routes';
import { Provider } from 'react-redux'
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Router>
          <App />
        </Router>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
