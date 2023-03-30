import React from 'react'
import './Card.css'

function Card() {
  return (
      <div className='cart'>
          <h2>Order Summary</h2>
          <p>Selected Items:</p>
          <p>Total Price:</p>
          <p>Shipping Charge:</p>
          <p>Tax:</p>
          <h3>Grand Total:</h3>
    </div>
  )
}

export default Card