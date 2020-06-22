import React from 'react'
import ProductFilter from './ProductFilter'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from 'redux/productDucks';

function ProductFilterContainer() {
  const dispatch = useDispatch();


  const handleClick = () : void  => {
    dispatch(getProductsAction());
  };

  return (
    <ProductFilter handleClick={handleClick}/>
  )
}

export default ProductFilterContainer
