import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import NavBar from './components/navBar';
import Availability from './pages/availability';
import NavButton from './components/navButton';
import ProgressBar from './components/progressBar';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <div style={styles.container}>
          <NavBar />
          <div style={styles.mainContent}>
            <Availability />
            <NavButton />
            <ProgressBar
              currentPage="Availability"
            />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row', // Change to row to place items side by side
    alignItems: 'flex-start', // Align items to the top
  },
  mainContent: {
    flex: 1, // Allow main content to take up remaining space
    alignItems: 'flex-start',
  },
};