import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Employee from './pages/employee';

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      <Employee />
    </div>
  );
}

export default App;