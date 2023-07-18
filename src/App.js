import React from 'react';
import TopBar from './components/TopBar';
import Rotator from './components/Rotator';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Topbar">
        <TopBar />
      </div>
      <div className='Shiny'>
        <Rotator />
      </div>
    </div>
  );
}

export default App;
