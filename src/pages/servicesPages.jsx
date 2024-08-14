import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../style/servicesPages.css';

const ServicesPage = () => {
    const products = [
        {
            id: 1,
            title: 'PC ASUS',
            description: 'Pici gemink 1.',
            imgUrl: 'https://kryptronix.in/wp-content/uploads/2021/09/MATREXX-55-MESH-with-4-ARGB-Fans-600x600-1-300x300.png',
        },
        {
            id: 2,
            title: 'PC SAMSUNG',
            description: 'Pc gemink 2.',
            imgUrl: 'https://geekbees.in/wp-content/uploads/2024/03/ABUIABACGAAgo_y5rwYoiLqZ8wUwoAY4oAY-removebg-preview-300x300.png',
        },
        {
            id: 3,
            title: 'PC AEROUS',
            description: 'Pc gemink 3.',
            imgUrl: 'https://www.empoweredpc.com/wp-content/uploads/2024/03/MICRO-Continuum-AIO-1000x1000px_brighter-300x300.png',
        },
        {
            id: 4,
            title: 'PC ACER',
            description: 'Pc gemink 4.',
            imgUrl: 'https://www.empoweredpc.com/wp-content/uploads/2024/03/MICRO-Continuum-AIO-1000x1000px_brighter-300x300.png',
        },
        {
            id: 5,
            title: 'PC AXIO',
            description: 'Pc Gemink 5.',
            imgUrl: 'https://armaggeddon.id/wp-content/uploads/2023/02/PC-Gaming-kevlar-13-FTX-300x300.png',
        },
        {
            id: 6,
            title: 'PC LG',
            description: 'Pc gemink 6.',
            imgUrl: 'https://armaggeddon.id/wp-content/uploads/2023/02/PC-Gaming-Tessaraxx-Apex-7-E-ATX-300x300.png',
        },
    ];

    return (
        <div className="services-page container my-5">
            <h2 className="text-center mb-4">Produk Kami</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <img src={product.imgUrl} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <h4>Contact Us</h4>
                <div className="d-flex justify-content-center">
                    <div className="mx-4 text-center">
                        <a href="https://instagram.com/rzvnptr" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={50} className="text-primary mb-2" />
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className="mx-4 text-center">
                        <a href="https://wa.me/081902679231" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={50} className="text-success mb-2" />
                            <p>WhatsApp</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
