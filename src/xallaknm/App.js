import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import XallaknmPage from './XallaknmPage';
import DataDashboard from './DataDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<XallaknmPage />} />
        <Route path="/data" element={<DataDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
