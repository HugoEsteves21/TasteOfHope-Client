import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <Link to="/home" className="active">
          Home
        </Link>
        <Link to="#news">News</Link>
        <Link to="#contact">Contact</Link>
        <Link to="#about">About</Link>
        <Link to="#" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </Link>
      </div>

      <div>
        <h2>Responsive Topnav Example</h2>
        <p>Resize the browser window to see how it works.</p>
      </div>
    </div>
  );
}

export default NavBar;
