// Navbar.js

import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
 // useNavigate ekledik

import logo from '../../assets/cart.png';

const Navbar = () => {
  // useNavigate'u tanımladık

  const handleSubmit = (e) => {
    e.preventDefault();
    // Arama işlemleri buraya gelebilir
  };

  const handleOrderTrack = () => {
    console.log('Sipariş Takip butonuna tıklandı');
    // Sipariş takip işlemleri buraya gelebilir
  };

  const handleLogin = () => {
    console.log('Üye Girişi butonuna tıklandı');
    // Üye girişi işlemleri buraya gelebilir
    // User.js sayfasına yönlendirme yapalım
  
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-3">
      <div className="container-fluid mx-auto">
        <div className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" />
          <span className="ms-3">Viva</span>
        </div>
        <div className="d-flex mx-auto align-items-center navbar-buttons">
          <div className="search-container d-flex">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Ara"
                aria-label="Ara"
              />
            </form>
            <button className="btn ml-2" type="button">
              Ara
            </button>
          </div>
          <div className="ml-auto d-flex align-items-center">
            <button className="order-track-button" type="button" onClick={handleOrderTrack}>
              Sipariş Takip <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button className="login-button" type="button" onClick={handleLogin}>
              <FontAwesomeIcon icon={faUser} /> Üye Ol veya Giriş Yap <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
