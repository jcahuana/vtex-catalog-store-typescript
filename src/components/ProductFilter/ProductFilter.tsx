import React from 'react';
import './ProductFilter.scss'

function ProductFilter() {
  return (
    <div className="ProductFilter card">
      <div className="card-body">
        <h5 className="card-title text-primary font-weight-light">Ordernar por</h5>
        <div className="ProductFilter__orderBy">
          <div className="dropdown">
            <button className="ProductFilter__select btn btn-outline-secondary rounded-xxl dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
              Nuevos lanzamientos
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><button className="dropdown-item" type="button">Action</button></li>
              <li><button className="dropdown-item" type="button">Another action</button></li>
              <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductFilter
