import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

import Login from './components/Auth/Login';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';

function App() {
  <Navbar></Navbar>
  return (
   
    <Router>
       
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/giris" element={<Login />} />
        {/* Diğer route'lar buraya eklenebilir */}
      </Routes>
    </Router>
  );
}

export default App;
