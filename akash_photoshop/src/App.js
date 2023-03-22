import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './views/component/header/header';
import Contact from './views/contact/contact_form';
import About from './views/about/about_page';
import Footer from './views/component/footer/footer';
import './App.css';
import Home from "./views/Home/Home"


function App() {
  return (
    <Router> 
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
