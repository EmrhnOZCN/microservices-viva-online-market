import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        {/* Diğer route'lar buraya eklenebilir */}
      </Routes>
    </Router>
  );
}

export default App;
