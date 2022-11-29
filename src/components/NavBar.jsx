import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import logo from '../images/logo-white.png';
import '../navbar.css';

function NavBar() {
  const [active, setActive] = useState('nav_menu');
  const [icon, setIcon] = useState('nav_toggler');
  const { user, authenticateUser, logout } = useContext(AuthContext);
  const navToggle = () => {
    if (active === 'nav_menu') {
      setActive('nav_menu nav_active');
    } else setActive('nav_menu');

    // Icon Toggler
    if (icon === 'nav_toggler') {
      setIcon('nav_toggler toggle');
    } else setIcon('nav_toggler');
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <nav className="nav">
      <Link to="/home" className="brand" onClick={() => setActive('nav_menu')}>
        <img src={logo} alt="" />
      </Link>
      <ul className={active}>
        <li className="nav_item">
          <Link to="/home" className="nav_link" onClick={() => setActive('nav_menu')}>
            🏠
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/about-us" className="nav_link" onClick={() => setActive('nav_menu')}>
            About Us
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/contacts" className="nav_link" onClick={() => setActive('nav_menu')}>
            Contacts
          </Link>
        </li>
        {user && (
          <li className="nav_item" onClick={() => setActive('nav_menu')}>
            <Link to={`/profile/${user._id}`} className="nav_link">
              My Profile
            </Link>
          </li>
        )}
        {user && (
          <li className="nav_item" onClick={() => setActive('nav_menu')}>
            <Link to="/" onClick={logout} className="nav_link">
              Logout
            </Link>
          </li>
        )}
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
