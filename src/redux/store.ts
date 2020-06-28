import {  configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import productsReducer from './ducks/productsDucks';

const middleware: any = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

