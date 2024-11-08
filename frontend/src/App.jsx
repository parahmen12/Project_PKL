import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import About from './components/about';
import Project from './components/project';
import Services from './components/services';
import Contact from './components/contact';
import Login from './pages/login';
import Register from './pages/register';
import AboutPages from './pages/aboutPages';
import ContactPages from './pages/contactPages';
import ServicesPages from './pages/servicesPages';
import Pembeli from './pages/pembeli'; 

const App = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const hideFooterPaths = ['/register', '/login'];
  const hideHeaderPaths = ['/register', '/login'];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/home" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Halaman yang tidak memerlukan autentikasi */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Halaman yang memerlukan autentikasi */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <Hero />
                <Project />
                <Services />
                <About />
                <Contact />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Halaman Pembeli */}
        <Route path="/pembeli" element={<ProtectedRoute element={<Pembeli />} />} />

        {/* Halaman yang memerlukan autentikasi */}
        <Route path="/aboutPages" element={<ProtectedRoute element={<AboutPages />} />} />
        <Route path="/contactPages" element={<ProtectedRoute element={<ContactPages />} />} />
        <Route path="/servicesPages" element={<ProtectedRoute element={<ServicesPages />} />} />

        <Route path="/hero" element={<ProtectedRoute element={<Hero />} />} />
        <Route path="/project" element={<ProtectedRoute element={<Project />} />} />

        {/* Route untuk halaman tidak ditemukan */}
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */} 
      </Routes>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
