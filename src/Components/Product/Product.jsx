import React from 'react'
import './Product.css'

function Product(props) {
    console.log(props.product)
    const {img, name, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-des'>
                <p>{name}</p>
                <p>Price: { price }</p>
                <p>Ratings: { ratings }</p>
            </div>
            <button className='cart-btn'>Add to cart</button>
    </div>
  )
}

export default Product