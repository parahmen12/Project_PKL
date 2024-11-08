import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/contact.css';

const Contact = () => {
  // State untuk menangkap input form
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

    // Validasi input kosong
    if (!name || !email || !message) {
      alert('Semua kolom harus diisi!');
      return;
    }

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Hallo, Saya ${name}, Email: ${email}. Pesan saya: ${message}`;

    const whatsappURL = `https://wa.me/+6281902679231?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect ke URL WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card p-4 shadow-sm">
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
                    required // Tambahkan atribut required
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
                    placeholder="user@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required // Tambahkan atribut required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Pesanmu"
                    value={formData.message}
                    onChange={handleChange}
                    required // Tambahkan atribut required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
