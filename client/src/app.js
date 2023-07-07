import React from 'react';
// import wolfLogo from '../src/images/wolf-logo.png'; // Replace with the actual path and filename of your wolf logo image
import './App.css'; // Import your CSS file for App component

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* <img src={wolfLogo} className="App-wolf-logo" alt="wolf logo" /> */}
        <p className="company-name">Chained Wolfe MetalCrafts</p>
        <p className="welcome-message">
          Welcome to my site. Random randomly, random.
        </p>
      </header>
    </div>
  );
}

export default App;

