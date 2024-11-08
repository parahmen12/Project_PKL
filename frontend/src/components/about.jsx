import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/about.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>Hubungi Melalui</h2>
      <div className="contact-icons">
        <a href="https://www.instagram.com/rzvnptr" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaInstagram size={60} />
          <p>Instagram</p>
        </a>
        <a href="https://wa.me/+6281902679231" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaWhatsapp size={60} />
          <p>WhatsApp</p>
        </a>
      </div>
    </section>
  );
};

export default About;
