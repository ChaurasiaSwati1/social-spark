import React, { useEffect } from 'react';
import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import InsideLayout from './layout/insideLayout';
import About from './component/About/About';
import Services from './component/Services/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactPage from './component/Contact/Contact';
import Landing from './component/Landing/Landing';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 800,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  useEffect(() => {
    document.title =
      'Social Spark | Digital Marketing Agency Near You in Greater Noida';
  }, []);
  return (
    <>
      <Routes>
        <Route path="/*" element={<InsideLayout />}>
          <Route path="" element={<Landing />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
