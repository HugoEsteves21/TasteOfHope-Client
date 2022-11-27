import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.png';
import '../navbar.css';

function NavBar() {
  const [active, setActive] = useState('nav_menu');
  const [icon, setIcon] = useState('nav_toggler');
  const navToggle = () => {
    if (active === 'nav_menu') {
      setActive('nav_menu nav_active');
    } else setActive('nav_menu');

    // Icon Toggler
    if (icon === 'nav_toggler') {
      setIcon('nav_toggler toggle');
    } else setIcon('nav_toggler');
  };

  return (
    <nav className="nav">
      <Link to="/" className="brand">
        <img src={logo} alt="" />
      </Link>
      <ul className={active}>
        <li className="nav_item">
          <Link to="/about-us" className="nav_link">
            About Us
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/contacts" className="nav_link">
            Contacts
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
