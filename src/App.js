import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link className="navbar-link" to="/about">Acerca de nosotros</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/mission">Misión y Visión</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/contact">Contáctenos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
