import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';      
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Project PKL 2024 PT. LSKK</h2>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#aboutPages">About</a></li>
            <li><a href="#servicesPages">Produk</a></li>
            <li><a href="#projectPages">Projects</a></li>
            <li><a href="#contactPages">Contact</a></li>
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
