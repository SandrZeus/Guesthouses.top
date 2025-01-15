import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"
import Home from "./pages/Home"
import Beginning from "./pages/Beginning"
import UrbanLiving from "./pages/UrbanLiving"
import Podcast from "./pages/Podcast"
import Berlin from "./pages/Berlin"
import About from "./pages/About"
import Coaching from "./pages/Coaching"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Imprint from "./pages/Imprint"
import DataProtection from './pages/DataProtection';

import { pdfjs } from 'react-pdf';

// Set workerSrc to the PDF.js worker globally
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token'));

  // Store the token in localStorage whenever it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);  // Save token in localStorage
    } else {
      localStorage.removeItem('token');  // Remove token from localStorage if it's null
    }
  }, [token]);

  return (
    <Router>
      <Header />
      <div className='spacer' />
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/home/beginning" element={<Beginning />} />
        <Route path="/home/urban-living" element={<UrbanLiving />} />
        <Route path="/home/podcast" element={<Podcast />} />
        <Route path="/home/berlin" element={<Berlin />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/contact" element={<Contact />} />

        <Route 
          path='/dashboard' 
          element={token ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route path='/login' element={<Login setToken={setToken} />} />

      </Routes>

      <Routes>
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/data_protection" element={<DataProtection />} />
      </Routes>
      <Footer />
      <Footer2 />
    </Router>
  );
}

export default App
