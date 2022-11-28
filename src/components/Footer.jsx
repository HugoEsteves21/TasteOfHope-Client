import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-bottom">
            © 2022 Copyright:
            <hr />
            <Link to="https://github.com/brunorocha20">Bruno Rocha</Link> &
            <Link to="https://github.com/HugoEsteves21/"> Hugo Esteves</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
