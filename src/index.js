import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import 'toastify-js/src/toastify.css';
import { appStore } from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
