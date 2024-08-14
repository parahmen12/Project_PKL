import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png" alt="ITB" width="50" className="me-2"/>
          <strong>PPTIK ITB</strong>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactPages">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutPages">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicesPages">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/workshop" className="btn btn-info">Workshop</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
