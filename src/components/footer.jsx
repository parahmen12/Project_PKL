import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';      
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>IteBe</h2>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} MuhRez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
