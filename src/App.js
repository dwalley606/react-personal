import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Rotator from './components/Rotator';
import Home from './components/Home'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Topbar">
          <TopBar />
        </div>
        <div className='Shiny'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/rotator" element={<Rotator />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;