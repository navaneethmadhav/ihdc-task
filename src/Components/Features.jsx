import React from 'react'
import Navbar from './Navbar'

import '../Styles/Features.css'
import MembershipLogo from '../Assets/Images/membership-cropped.jpg'

const Features = () => {
  return (
    <div>
      <Navbar />
      <div className='content-wrapper'>
        <div className="membership-container">
          <div className="membership-header-section">
            <div className='membership-main-header'>
              <h1>New Arrival</h1>
            </div>
            <div className="membership-sub-header">
              <p><span>JOIN</span> TODAY</p>
            </div>
          </div>

          <div className="membership-img-section">
            <div className="membership-logo">
              <img src={MembershipLogo} alt="" />
            </div>
            <div className="community-join-btn">
              <button className="beautiful-button">JOIN NOW</button>
            </div>
          </div>
        </div>

        <div className="features-container">
          <div className="features-header-section">
            <h1>Unlock Premium Features Now</h1>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features