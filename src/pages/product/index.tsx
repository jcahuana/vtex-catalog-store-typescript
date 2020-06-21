import React from 'react'
import ProductFilter from 'components/ProductFilter'
import ProductCard from 'components/ProductCard'
import './index.scss';

function ProductPage() {
  return (
    <div className="container-xl">
      <div className="ProductPage">
        <div className="ProductPage__sidebar">
          <ProductFilter />
        </div>
        <div className="ProductPage__content">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
