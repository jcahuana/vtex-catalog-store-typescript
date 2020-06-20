import React from 'react'
import ProductCard from 'components/ProductCard'

function ProductPage() {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-sm col-md-4">
        </div>
        <div className="col-sm col-md-8">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
