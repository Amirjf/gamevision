import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import { logger } from 'redux-logger';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const appStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(appStore);

export default { appStore, persistor };
