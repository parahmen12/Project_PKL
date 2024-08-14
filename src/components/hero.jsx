import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/hero.css';

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src="https://www.itb.ac.id/files/images/1590135987.JPG" alt="PPTIK" className="img-fluid hero-image" />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1>PUSAT PENELITIAN TEKNOLOGI INFORMASI DAN KOMUNIKASI</h1>
            <p className="lead">
              Pusat Penelitian Teknologi Informasi dan Komunikasi adalah salah satu pusat penelitian utama yang terdapat di ITB yang dibangun dengan tujuan agar masyarakat dapat memanfaatkan penyebaran TIK yang secara global telah meluas.
              PPTIK berfokus pada pengembangan dan penerapan TIK untuk mengubah masyarakat Indonesia menjadi masyarakat yang memiliki pengetahuan akan TIK,
              dengan penekanan khusus pada masyarakat pedesaan.
            </p>
            <a href="https://id.wikipedia.org/wiki/Institut_Teknologi_Bandung" className="btn btn-read-more mt-3">Baca Selengkapnya {'>'}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
