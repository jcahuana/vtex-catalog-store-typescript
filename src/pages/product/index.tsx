import React from 'react'
import ProductFilter from 'components/ProductFilter';
import ProductCard from 'components/ProductCard';
import './index.scss';

function ProductPage() {

  return (
    <div className="container-xl">
      <div className="ProductPage">
        <aside className="ProductPage__sidebar">
          <ProductFilter />
        </aside>
        <main className="ProductPage__content">
          <header className="ProductPage__header d-flex justify-content-between align-items-baseline mb-4">
            <h1 className="h4 text-primary lh-1 mb-0">Solo planes</h1>
            <div className="h6 text-primary mb-0">Mostrando <b>06</b> de <b>06</b> productos</div>
          </header>
          <section className="ProductPage__productList">
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
          </section>
        </main>
      </div>
    </div>
  )
}

export default ProductPage
