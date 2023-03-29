import './Shop.css'
import React, { useEffect, useState } from 'react'

function Shop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

  return (
      <div className='shop-container'>
          <div className="product-container">
              Total products: {products.length}
          </div>
          <div className="cart-container">
              Cart data
          </div>
      </div>
  )
}

export default Shop