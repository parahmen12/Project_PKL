import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/project.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>News Update</h2>
      <hr className="underline" />
      <div className="project-list row">
        <div className="col-md-4">
          <div className="card project-item">
            <img src="https://www.itb.ac.id/files/dokumentasi/1687417546-IMG-20230617-WA0009.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Prestasi Instansi</h5>
              <p className="card-text"><i className="bi bi-clock"></i> Jan 1, 2024</p>
              <p className="card-text">Berhasil meraih juara 3</p>
              <a href="#more-info" className="btn btn-primary">Read More <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card project-item">
            <img src="https://www.itb.ac.id/files/dokumentasi/1692174684-DSC04024.JPG" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">MABA Instansi</h5>
              <p className="card-text"><i className="bi bi-clock"></i> Feb 1, 2024</p>
              <p className="card-text">Sebanyak 500 mahasiswa sedang melakukan pengenalan kampus instansi</p>
              <a href="#more-info" className="btn btn-primary">Read More <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card project-item">
            <img src="https://pbs.twimg.com/media/D1mYBr4WkAAUvk4.jpg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text"><i className="bi bi-clock"></i> Mar 1, 2024</p>
              <p className="card-text">This is a short description of Project 3.</p>
              <a href="#more-info" className="btn btn-primary">Read More <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card project-item">
            <img src="https://fastly.4sqi.net/img/general/600x600/5485569_q5MXMNic5HOoeqNZPFg47TnHBPtB25I9OBs_YF4QbnY.jpg" className="card-img-top" alt="Project 4" />
            <div className="card-body">
              <h5 className="card-title">Project 4</h5>
              <p className="card-text"><i className="bi bi-clock"></i> Apr 1, 2024</p>
              <p className="card-text">This is a short description of Project 4.</p>
              <a href="#more-info" className="btn btn-primary">Read More <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card project-item">
            <img src="https://mediacdn.quipper.com/media/W1siZiIsIjIwMTgvMDEvMjMvMDkvMzIvMDcvMWZiMzQwMmUtMGM5Ny00ZjQ1LTliZWItMzczYzkzMzNjODRkLyJdLFsicCIsInRodW1iIiwiMTIwMHhcdTAwM2UiLHt9XSxbInAiLCJjb252ZXJ0IiwiLWNvbG9yc3BhY2Ugc1JHQiAtc3RyaXAiLHsiZm9ybWF0IjoianBnIn1dXQ?sha=0c166169d287735d" className="card-img-top" alt="Project 5" />
            <div className="card-body">
              <h5 className="card-title">Project 5</h5>
              <p className="card-text"><i className="bi bi-clock"></i> May 1, 2024</p>
              <p className="card-text">This is a short description of Project 5.</p>
              <a href="#more-info" className="btn btn-primary">Read More <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card project-item">
            <img src="https://stei.itb.ac.id/wp-content/uploads/IMG_6234.jpg" className="card-img-top" alt="Project 6" />
            <div className="card-body">
              <h5 className="card-title">Project 6</h5>
              <p className="card-text"><i className="bi bi-clock"></i> Jun 1, 2024</p>
              <p className="card-text">This is a short description of Project 6.</p>
              <a href="#more-info" className="btn btn-primary">Read More <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
