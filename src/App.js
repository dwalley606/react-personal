import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar.js';
import Rotator from './components/Rotator/Rotator.js';
import Home from './components/Home/Home.js';
import './App.css';
import Music from './components/Music/Music.js';
import Forum from './components/Forum/Forum.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Topbar">
          <TopBar />
        </div>
        <div className='Shiny' style={{ marginBottom: '10px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="/rotator" element={<Rotator />} />
            <Route path="/music" element={<Music />} />
            <Route path="/forum" element={<Forum />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;