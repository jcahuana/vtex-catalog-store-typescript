import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productsReducer from './productDucks';

const rootReducer = combineReducers({
  products: productsReducer
});

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}