import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return <header className="header">
    {/* Header logo */}
    <NavLink to="/" >
      <img src="https://maceilautobody.com/wp-content/uploads/2018/06/logo-placeholder.png" alt="Logo" />
    </NavLink>
    {/* nav links */}
    <nav className="header_nav">
      <ul>
        <li>
          <NavLink to="">
          Link1
          </NavLink>
        </li>
        <li>
          <NavLink to="">
          Link2
          </NavLink>
        </li>
        <li>
          <NavLink to="">
          Link3
          </NavLink>
        </li>
      </ul>
      
    </nav>
  </header>
}

export default Header;
