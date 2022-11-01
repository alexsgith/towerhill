import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <img className='logo' src='./images/logo.png' alt="logo"></img>
            <div className="navItems">
                <button className="navButton drop-shadow-sm">Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar