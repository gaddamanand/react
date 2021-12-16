import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return <React.Fragment>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <main className="container">
                <h1>404</h1>
                <p>Page not found</p>
              </main>
            } />
          </Routes>

          </React.Fragment>
}

export default App;
