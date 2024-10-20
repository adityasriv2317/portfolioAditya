import React from 'react'
import './App.css';

let name = 'Aditya Srivastava'

function App() {
  return (
    <>

      <header>
        <div className="logo">
          <span className="bracket">&lt;</span>
          {name}
          <span className="bracket">&gt;</span>
        </div>
        <nav className='navlinks'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="menu">&#9776;</div>
      </header>

      <div className="home" id='home'>
        home div
        sfdd
        sfdd
        sfdds
        sdf
      </div>
      
    </>
  );
}

export default App;
