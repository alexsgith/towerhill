import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <img className='logo' src='./images/logo.png' alt="logo"></img>
            <div className="navItems">
                <button className="AgButton drop-shadow-sm" >Agencies</button>
                <button className="navButton drop-shadow-sm" 
                  onClick={function refreshPage() 
                    {window.location.reload(false);}}>Logout
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar