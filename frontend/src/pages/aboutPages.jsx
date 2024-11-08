import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/aboutPages.css';

const AboutPages = () => {

    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        //About Overlay
        <section className="about-section">
            <div className="about-header text-center text-white">
                <div className="about-overlay"></div>
                <div className="container">
                    <h1>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK ITB)</h1>
                    <p className="lead">
                        PPTIK ITB focuses on developing and applying ICT to transform Indonesian society into an ICT-aware community, with a special emphasis on rural areas.
                        Institut Teknologi Bandung (ITB) merupakan sekolah tinggi teknik pertama di Indonesia yang didirikan pada tanggal 2 Maret 1959 di Jawa Barat yang mengemban misi pengabdian ilmu pengetahuan dan teknologi untuk memajukan Indonesia. Lahir dalam suasana penuh dinamika yang dilandasi dengan semangat perjuangan Proklamasi Kemerdekaan, ITB hadir untuk mengoptimalkan pembangunan bangsa yang maju dan bermartabat.
                    </p>
                </div>
            </div>  
            {/* TimPengelola */}
            <div className="container team-section py-5">
                <h2 className="text-center mb-5">Tim Kami</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="team-member text-center">
                            <img src="https://akcdn.detik.net.id/visual/2023/10/02/potret-karakter-harry-potter-yang-diperankan-daniel-radcliffe-foto-instagramharrypotterfilm.jpeg?w=480&q=90" alt="Team Member 1" className="img-fluid rounded-circle mb-3" />
                            <h5>Ketua Perusahaan</h5>
                            <p className="text-muted">Muhamad Rezvan Putra</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="team-member text-center">
                            <img src="https://cdn0-production-images-kly.akamaized.net/jCrB2yFDgDV3KiJSNT3p0H_MuRE=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4778821/original/005764000_1710926019-chrisevansns_1200x600.jpg" alt="Team Member 2" className="img-fluid rounded-circle mb-3" />
                            <h5>Sekretaris</h5>
                            <p className="text-muted">Kalyana Baruna </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="team-member text-center">
                            <img src="https://cdn1-production-images-kly.akamaized.net/I7CyoJmA8rzA3dna5NwtDETZSJw=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/963477/original/65419e1264aef9a2db3ca61b37fd6c93orth-598x376.jpg" alt="Team Member 3" className="img-fluid rounded-circle mb-3" />
                            <h5>Bendahara</h5>
                            <p className="text-muted">Muhsyaf Ali</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPages;
