// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Navbar from './components/Navbar/Navbar';
import Producttemp from './components/producttemp/Producttemp';
import Navbar2 from './components/Navbar2/Navbar2';
import Footer from './components/Footer/Footer';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <Router>
         <Navbar />
        
      <Routes>
        <Route path="/" element={<Home />} />
     
        <Route path="/:formattedCategory" element={<Producttemp />} />

        <Route path="/giris" element={<Login />} />
        <Route path="/kayit-ol" element={<SignUp />} />
        {/* Diğer route'lar buraya eklenebilir */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
