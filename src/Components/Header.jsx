import React from 'react'

import '../Styles/Header.css'
import logo from '../Assets/Images/real-estate-house.png'

const Header = () => {
  return (
    <div>
        <div className="navbar">
            <div className='navbar-content-wrapper'>
                <div className="navbar-logo-wrapper">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-name-wrapper">
                    <h1>XYZ SYSTEMS LLP .</h1>
                </div>
                <div className="hidden-navbar-content"></div>
            </div>
        </div>
    </div>
  )
}

export default Header