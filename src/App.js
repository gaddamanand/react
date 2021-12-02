import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navigation />
    <div style={{ margin:'0 2rem',}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
    </>

  );
}

export default App;
