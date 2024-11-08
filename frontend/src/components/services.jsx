import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/services.css';

const Services = () => {
  return (
    <section className="location-section d-flex align-items-center" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card p-4">
              <h2 className="card-title"><strong>LOKASI INSTANSI</strong></h2>
              <p className="card-text">Jl. Ganesha No. 10, Bandung, Jawa Barat, Indonesia</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1580184563265!2d107.61075911607999!3d-6.891569596217619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65d2f3d5a95%3A0xded9f8cf54de2aa!2sInstitut%20Teknologi%20Bandung!5e0!3m2!1sen!2sid!4v1594568895891!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ITB Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
