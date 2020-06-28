import React from 'react';
import ProductFilter from './ProductFilter'
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'redux/ducks/productsDucks';

function ProductFilterContainer() {
  const dispatch = useDispatch();

  const handleClick = () : void  => {
    dispatch(fetchProducts());
  };

  return (
    <ProductFilter handleClick={handleClick}/>
  )
}

export default ProductFilterContainer
