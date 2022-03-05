import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return <footer className="footer">
      <div className="footer__content">
        <div className="footer__socials">
          <a href="/" target="_blank">
            <img src="/images/icons8-instagram-30.png" alt="instagram" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons8-twitter-30.png" alt="twitter" />
          </a>
          <a href="https://github.com/eliasnorta" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons8-github-30.png" alt="github" />
          </a>
        </div>
        <div className="footer__links">
          <ul>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="insignia">
          <small>WebStore 2022</small>
        </div>
      </div>
    </footer>;
}

export default Footer