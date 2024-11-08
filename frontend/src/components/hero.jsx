import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/hero.css';

const Hero = () => {
  // State untuk mengatur tampilan penjelasan tambahan
  const [showMore, setShowMore] = useState(false);

  // Fungsi untuk menangani klik tombol "Baca Selengkapnya"
  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="https://www.itb.ac.id/files/images/1590135987.JPG"
              alt="PPTIK"
              className="img-fluid hero-image"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1>PUSAT PENELITIAN TEKNOLOGI INFORMASI DAN KOMUNIKASI</h1>
            <p className="lead">
              Pusat Penelitian Teknologi Informasi dan Komunikasi adalah salah satu pusat penelitian utama yang terdapat di ITB yang dibangun dengan tujuan agar masyarakat dapat memanfaatkan penyebaran TIK yang secara global telah meluas.
              PPTIK berfokus pada pengembangan dan penerapan TIK untuk mengubah masyarakat Indonesia menjadi masyarakat yang memiliki pengetahuan akan TIK, dengan penekanan khusus pada masyarakat pedesaan.
            </p>
            <button 
              onClick={handleReadMore} 
              className="btn btn-read-more mt-3"
            >
              {showMore ? 'Sembunyikan' : 'Baca Selengkapnya >'}
            </button>

            {/* Konten tambahan yang akan ditampilkan ketika showMore bernilai true */}
            {showMore && (
              <div className="additional-content mt-4 p-3 bg-light rounded shadow-sm">
                <h2>Visi dan Misi PPTIK</h2>
                <p className="mb-3">
                  PPTIK memiliki visi untuk menjadi pusat unggulan dalam pengembangan teknologi informasi dan komunikasi yang relevan dan bermanfaat bagi masyarakat luas.
                  Misi kami adalah untuk melakukan penelitian, pengembangan, dan penerapan TIK dalam berbagai sektor termasuk pendidikan, kesehatan, dan pertanian guna meningkatkan kesejahteraan masyarakat.
                </p>

                <h3>Bidang Penelitian</h3>
                <ul className="list-unstyled mb-3">
                  <li>🔹 Internet of Things (IoT) untuk Smart City</li>
                  <li>🔹 Pengembangan Aplikasi Berbasis Cloud</li>
                  <li>🔹 Keamanan Siber dan Forensik Digital</li>
                  <li>🔹 Big Data dan Analisis Data</li>
                  <li>🔹 Komputasi Terdistribusi dan Jaringan</li>
                </ul>

                <h3>Proyek Terbaru</h3>
                <p>
                  PPTIK terus berinovasi dengan berbagai proyek terbaru seperti pengembangan sistem pemantauan kualitas udara berbasis IoT, aplikasi kesehatan untuk daerah terpencil, dan kolaborasi dengan industri untuk teknologi keamanan jaringan terbaru.
                  Kami berkomitmen untuk terus berkontribusi dalam menciptakan solusi yang bermanfaat bagi masyarakat.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
