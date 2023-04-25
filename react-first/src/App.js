import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';




function App() {
  return (
    <>
    {/*Npm run build
      firebase deploy */}
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/services' Component={Services}/>
      <Route path='/products' Component={Products}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
