import React, { useState, useRef } from 'react'

import '../Styles/Navbar.css'
import { BiSearch } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      <div className={`navbar ${showSidebar ? 'mobile-navbar' : ''}`}>
        <div className={`menu-icon ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}>
          <div className="bar"><FaBars /></div>
        </div>
        <ul className='navbar-options'>
          <Link to={'/'}><div>Home</div></Link>
          <Link to={''}><div>Dashboard</div></Link>
          <Link to={''}><div>Products</div></Link>
          <Link to={''}><div>Transactions</div></Link>
          <Link to={''}><div>Journal</div></Link>
        </ul>

        <div className={`sidebar ${showSidebar ? 'active' : ''}`}>

          <div className="options-section">
            <Link to={'/'}><div>Home</div></Link>
            <Link to={''}><div>Dashboard</div></Link>
            <Link to={''}><div>Products</div></Link>
            <Link to={''}><div>Transactions</div></Link>
            <Link to={''}><div>Journal</div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar