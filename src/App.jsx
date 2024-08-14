import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import About from'./components/about';
import Projects from './components/project';
import Services from './components/services';
import Contact from './components/contact';
import AboutPages from './pages/aboutPages';
import ContactPages from './pages/contactPages';
import ServicesPages from './pages/servicesPages';
import Workshop from './pages/workshop';
import Footer from './components/footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Projects />
              <Services />
              <Contact />
              <About />
            </>
          } 
        />
        
        {/* About Page Route */}
        <Route path="/aboutPages" element={<AboutPages />} />
        
        {/* Contact Page Route */}
        <Route path="/contactPages" element={<ContactPages />} />
        {/* Services Page Route */}
        <Route path="/servicesPages" element={<ServicesPages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
