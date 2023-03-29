import React from 'react'
import './Header.css'
import logo from '../../images/Logo.svg'

function Header() {
  return (
    <nav className='header'>
      <div className="container">
        <img src={logo} alt="" />
        <div>
          <a href="./shop">Shop</a>
          <a href="./orders">Orders</a>
          <a href="./inventory">Inventory</a>
          <a href="./login">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
