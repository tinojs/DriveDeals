import './Navbar.css';

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

const Navbar = () => {
  const { isAuthenticated, logoutHandler } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/home">MyApp</NavLink>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/all-cars" className="nav-link">All cars</NavLink>
          </li>
          <li className="nav-item">

            <NavLink to={isAuthenticated ? '/add-car' : '/login'} className="nav-link">Sell your car</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/locations" className="nav-link">Locations</NavLink>
          </li>
        </ul>

        <div className={`nav-auth ${isMenuOpen ? 'active' : ''}`}>
          {isAuthenticated ?
            <>
              <NavLink to='/my-profile' className="nav-link">My profile</NavLink>
              <button onClick={logoutHandler} className="signup-btn">Log out</button>
            </>
            :
            <>
              <NavLink to="/login" className="login-btn">Log In</NavLink>
              <NavLink to="/register" className="signup-btn">Sign Up</NavLink>
            </>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;