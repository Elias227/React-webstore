import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return <header className="header">
    {/* Header logo */}
    <NavLink to="/" >
      <img src="https://placeholderlogo.com/img/placeholder-logo-1.png" alt="Logo" />
    </NavLink>
    {/* nav links */}
    <nav className="header_nav">
      <ul>
        <li>
          <NavLink to="/">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
}

export default Header;
