import React from 'react';
import '../navbar.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-bottom">
            © 2022 Copyright:
            <hr />
            <a href="https://github.com/brunorocha20" target="_blank" rel="noopener noreferrer">
              Bruno Rocha
            </a>
            &
            <a
              href="https://www.linkedin.com/in/hugo-veiga-esteves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hugo Esteves
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
