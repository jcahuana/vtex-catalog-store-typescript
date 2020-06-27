import React from 'react';
import ProductFilter from './ProductFilter'
import { useDispatch } from 'react-redux';
import { Creators } from 'redux/productDucks';

function ProductFilterContainer() {
  const dispatch = useDispatch();


  const handleClick = () : void  => {
    dispatch(Creators.getProductsAction());
  };

  return (
    <ProductFilter handleClick={handleClick}/>
  )
}

export default ProductFilterContainer
