import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../style/servicesPages.css'; // Pastikan path CSS benar

const ServicesPage = () => {
    useEffect(() => {
        document.title = 'Services';
    }, []);

    const products = [
        {
            id: 1,
            title: 'PC ASUS',
            description: 'Dilengkapi dengan Mobo dari AEROUS serta berisi RAM 16 GB, dilengkapi dengan Processor Intel I9 Gen 12 serta VGA RTX 4090.',
            imgUrl: 'https://kryptronix.in/wp-content/uploads/2021/09/MATREXX-55-MESH-with-4-ARGB-Fans-600x600-1-300x300.png',
            admin: 'Admin ASUS',
            rating: 4.5
        },
        {
            id: 2,
            title: 'PC SAMSUNG',
            description: 'Pc gemink 2.',
            imgUrl: 'https://geekbees.in/wp-content/uploads/2024/03/ABUIABACGAAgo_y5rwYoiLqZ8wUwoAY4oAY-removebg-preview-300x300.png',
            admin: 'Admin Samsung',
            rating: 4.0
        },
        {
            id: 3,
            title: 'PC AEROUS',
            description: 'Pc gemink 3.',
            imgUrl: 'https://www.empoweredpc.com/wp-content/uploads/2024/03/MICRO-Continuum-AIO-1000x1000px_brighter-300x300.png',
            admin: 'Admin Aorus',
            rating: 4.7
        },
        {
            id: 4,
            title: 'PC ACER',
            description: 'Pc gemink 4.',
            imgUrl: 'https://www.empoweredpc.com/wp-content/uploads/2024/03/MICRO-Continuum-AIO-1000x1000px_brighter-300x300.png',
            admin: 'Admin Acer',
            rating: 4.3
        },
        {
            id: 5,
            title: 'PC AXIO',
            description: 'Pc Gemink 5.',
            imgUrl: 'https://armaggeddon.id/wp-content/uploads/2023/02/PC-Gaming-kevlar-13-FTX-300x300.png',
            admin: 'Admin Axio',
            rating: 4.6
        },
        {
            id: 6,
            title: 'PC LG',
            description: 'Pc gemink 6.',
            imgUrl: 'https://armaggeddon.id/wp-content/uploads/2023/02/PC-Gaming-Tessaraxx-Apex-7-E-ATX-300x300.png',
            admin: 'Admin LG',
            rating: 4.2
        },
    ];

    const handleMessageClick = (title) => {
        const message = `Hallo Admin, saya tertarik dengan ${title}. Mohon info lebih lanjut.`;
        const whatsappURL = `https://wa.me/+6281902679231?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

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
                                <p className="card-text"><strong>Admin:</strong> {product.admin}</p>
                                <p className="card-text"><strong>Rating:</strong> {product.rating} / 5</p>
                                <button
                                    className="btn btn-primary mt-2"
                                    onClick={() => handleMessageClick(product.title)}
                                >
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <h4 className="text-contact">Contact Us</h4>
                <div className="d-flex justify-content-center">
                    <div className="mx-4 text-center">
                        <a href="https://instagram.com/rzvnptr" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={50} className="text-primary mb-2" />
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className="mx-4 text-center">
<<<<<<< HEAD:frontend/src/pages/servicesPages.jsx
                        <a href="https://wa.me/+6281902679231" target="_blank" rel="noopener noreferrer">
=======
                        <a href="https://wa.me/081902679231" target="_blank" rel="noopener noreferrer">
>>>>>>> 8efb7a116007c68abd54e098a3565f51f42bf734:src/pages/servicesPages.jsx
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
