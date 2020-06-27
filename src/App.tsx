import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from './redux/store';
import ProductPage from './pages/product';

// const store = generateStore();
// console.log('store', store);


function App() {
  return (
    <Provider store={store}>
      <ProductPage />
    </Provider>
  );
}

export default App;
