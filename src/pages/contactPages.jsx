import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/contactPages.css';

const ContactPages = () => {
    return (
        <section className="contact-page py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-box p-5 rounded shadow-lg">
                            <h2 className="text-center mb-4">Contact kami</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Full Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your Message"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="text-center mt-5">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="#" className="mx-2"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="mx-2"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="mx-2"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="mx-2"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPages;
