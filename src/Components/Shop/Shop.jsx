import './Shop.css'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import Card from '../Card/Card';

function Shop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
    console.log(product)
}
  return (
      <div className='shop-container'>
          <div className="product-container">
              {
                  products.map(product => <Product key={product.id} product={product} handleAddToCart={ () => handleAddToCart(product) } />) 
             }
          </div>
          <div className="cart-container">
              <Card/>
          </div>
      </div>
  )
}

export default Shop