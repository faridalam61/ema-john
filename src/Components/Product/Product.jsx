import React from 'react'
import './Product.css'

function Product(props) {
    const { img, name, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-des'>
                <p>{name}</p>
                <p>Price: { price }</p>
                <p>Ratings: { ratings }</p>
            </div>
            <button onClick={handleAddToCart} className='cart-btn'>Add to cart</button>
    </div>
  )
}

export default Product