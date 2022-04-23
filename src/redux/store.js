import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { logger } from 'redux-logger';

export const appStore = createStore(rootReducer, applyMiddleware(logger));
