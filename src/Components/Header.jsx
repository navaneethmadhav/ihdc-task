import React from 'react'

import '../Styles/Header.css'
import logo from '../Assets/Images/real-estate-house.png'

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className='header-content-wrapper'>
                <div className="header-logo-wrapper">
                    <img src={logo} alt="" />
                </div>
                <div className="header-name-wrapper">
                    <h1>XYZ SYSTEMS LLP .</h1>
                </div>
                <div className="hidden-header-content"></div>
            </div>
        </div>
    </div>
  )
}

export default Header