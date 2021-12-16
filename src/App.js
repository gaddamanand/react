import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Navigation from './components/navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return <React.Fragment>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>  
  </React.Fragment>
}

export default App;
