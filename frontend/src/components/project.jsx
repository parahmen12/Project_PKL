import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/project.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>News Update</h2>
      <hr className="underline" />
      <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card project-item">
                  <img
                    src="https://www.itb.ac.id/files/dokumentasi/1687417546-IMG-20230617-WA0009.jpg"
                    className="card-img-top"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Prestasi Instansi</h5>
                    <p className="card-text">
                      <i className="bi bi-clock"></i> Jan 1, 2024
                    </p>
                    <p className="card-text">
                      Berhasil meraih juara 3 dalam lomba terbesar
                    </p>
                    <a href="#more-info" className="btn btn-primary">
                      Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-item">
                  <img
                    src="https://www.itb.ac.id/files/dokumentasi/1692174684-DSC04024.JPG"
                    className="card-img-top"
                    alt="Project 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">MABA Instansi</h5>
                    <p className="card-text">
                      <i className="bi bi-clock"></i> Feb 1, 2024
                    </p>
                    <p className="card-text">
                       mahasiswa sedang melakukan pengenalan kampus 
                    </p>
                    <a href="#more-info" className="btn btn-primary">
                      Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-item">
                  <img
                    src="https://pbs.twimg.com/media/D1mYBr4WkAAUvk4.jpg"
                    className="card-img-top"
                    alt="Project 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Project 3</h5>
                    <p className="card-text">
                      <i className="bi bi-clock"></i> Mar 1, 2024
                    </p>
                    <p className="card-text">Kerja sama dengan PPTIK.</p>
                    <a href="#more-info" className="btn btn-primary">
                      Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tambahan 3 card */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card project-item">
                  <img
                    src="https://itb.ac.id/files/dokumentasi/WhatsApp-Image-2024-11-07-at-13.33.22_dd6b4486.jpg"
                    className="card-img-top"
                    alt="Project 4"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Project 4</h5>
                    <p className="card-text">
                      <i className="bi bi-clock"></i> Apr 1, 2024
                    </p>
                    <p className="card-text">Melakuka summit sebuah penelitian.</p>
                    <a href="#more-info" className="btn btn-primary">
                      Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-item">
                  <img
                    src="https://itb.ac.id/files/dokumentasi/Screenshot-2024-11-07-144836.jpg"
                    className="card-img-top"
                    alt="Project 5"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Project 5</h5>
                    <p className="card-text">
                      <i className="bi bi-clock"></i> May 1, 2024
                    </p>
                    <p className="card-text">Pengenalan Program Studi.</p>
                    <a href="#more-info" className="btn btn-primary">
                      Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card project-item">
                  <img
                    src="https://itb.ac.id/files/dokumentasi/WhatsApp-Image-2024-11-07-at-07.41.09_9ec2e596.jpg"
                    className="card-img-top"
                    alt="Project 6"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Project 6</h5>
                    <p className="card-text">
                      <i className="bi bi-clock"></i> Jun 1, 2024
                    </p>
                    <p className="card-text">Best Award.</p>
                    <a href="#more-info" className="btn btn-primary">
                      Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
