import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import 'toastify-js/src/toastify.css';
import { appStore, persistor } from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

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
