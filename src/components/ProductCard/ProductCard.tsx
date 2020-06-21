import React from 'react'
import './ProductCard.scss';

function ProductCard() {
  return (
    <div className="ProductCard card">
      <div className="card-body">
        <h5 className="card-title text-center text-second-primary font-weight-light">Entel Chip <span className="font-weight-bold">29.9</span></h5>
        <div className="d-flex justify-content-center">
          <div className="ProductCard__badge badge bg-primary d-flex align-items-center justify-content-center">
            Migra a Entel
          </div>
        </div>
        <p className="card-text text-center pt-3 border rounded-lg mt-n2 p-2">
          <span className="d-block">¡DUPLICA TUS GIGAS!</span>
          <span className="d-block text-bold">3 meses</span>
        </p>

      </div>
    </div>
  )
}

  export default ProductCard
