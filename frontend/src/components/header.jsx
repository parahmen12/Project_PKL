import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    // Menampilkan pop-up konfirmasi dengan SweetAlert2
    Swal.fire({
      title: 'Yakin ingin Logout?',
      text: 'Anda akan keluar dari sesi saat ini.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aksi logout, seperti menghapus token atau sesi
        navigate('/login'); // Mengarahkan ke halaman login
        Swal.fire('Logged Out!', 'Anda telah berhasil keluar', 'success'); // Menampilkan pesan sukses
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png"
            alt="ITB"
            width="50"
            className="me-2"
          />
          <strong>PPTIK</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactPages">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutPages">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicesPages">
                Services
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Data
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/pembeli">
                    Data Pembeli
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item"> 
              <button onClick={handleLogout} className="button-logout">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
