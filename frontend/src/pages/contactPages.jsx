import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../style/contactPages.css';

const ContactPages = () => {
  //berganti title
  useEffect(() => {
    document.title = 'Contact';
}, []);
  // State untuk menyimpan input form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fungsi untuk mengubah nilai input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validasi input
    if (!name || !email || !message) {
      alert('Semua kolom harus diisi!');
      return;
    }

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Hallo, Saya ${name}, Email: ${email}. Pesan saya: ${message}`;

    // Format Nomor Whatsapp
    const whatsappURL = `https://wa.me/6281902679231?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect ke URL WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="contact-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-box p-5 rounded shadow-lg">
              <h2 className="text-center mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    required // Menambahkan atribut required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="nama@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required // Menambahkan atribut required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Pesan
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Pesanmu...."
                    value={formData.message}
                    onChange={handleChange}
                    required // Menambahkan atribut required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center mt-5">
              <h3>Follow Us</h3>
              <div className="d-flex justify-content-center">
                <div className="mx-4 text-center">
                  <a
                    href="https://instagram.com/rzvnptr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={50} className="text-primary mb-2" />
                    <p>Instagram</p>
                  </a>
                </div>
                <div className="mx-4 text-center">
                  <a
                    href="https://wa.me/+6281902679231"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={50} className="text-success mb-2" />
                    <p>WhatsApp</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPages;
