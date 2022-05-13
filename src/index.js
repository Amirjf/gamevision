import React from 'react';
import ReactDOM from 'react-dom';
import { appStore, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import 'boxicons/css/boxicons.min.css';
import './index.css';
import 'toastify-js/src/toastify.css';

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
