import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import productsReducer from './productDucks';

const reducers = combineReducers({
  products: productsReducer
});

const middleware: any = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: reducers,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

