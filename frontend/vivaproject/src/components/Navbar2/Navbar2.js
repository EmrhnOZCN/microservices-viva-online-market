import React, { useState } from 'react';
import './Navbar2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import logo from '../../assets/cart.png';
import KonumModal from './KonumModal';

const Navbar2 = () => {
  const [isKonumModalOpen, setIsKonumModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Arama işlemleri buraya gelebilir
  };

  const handleSelect1 = () => {
    console.log('Konum Seç butonuna tıklandı');
    setIsKonumModalOpen(true);
  };

  const handleCloseKonumModal = () => {
    setIsKonumModalOpen(false);
  };

  const handleSelect2 = () => {
    console.log('Üye Girişi butonuna tıklandı');
    // Modal'i aç
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Modal kapatıldığında
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-3">
      <div className="container-fluid mx-auto">
        <div className="ml-auto d-flex align-items-center">
          <button className="order-track-button" type="button" onClick={handleSelect1}>
            Konum Seç <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button className="login-button" type="button" onClick={handleSelect2}>
            Katagoriler <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
      <ReactModal
        isOpen={isKonumModalOpen}
        onRequestClose={handleCloseKonumModal}
        contentLabel='Konum Modalı'
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            width: '80%',
            maxWidth: '800px',
            height: 'auto',
            maxHeight: '800px',
            margin: '0 auto',
            border: 'none',
            borderRadius: '15px',
            backgroundColor: '#fff',
            padding: 20,
            overflow: 'visible',
            position: 'relative',
          },
        }}
      > 
        <button onClick={handleCloseKonumModal} style={{ position: 'absolute', top: '-0px', right: '20px', fontSize: '52px', cursor: 'pointer', padding: '10px', border: 'none', background: 'none', color: '#000' }}>
          &#x2715;
        </button>
        <KonumModal onClose={handleCloseKonumModal} />
      </ReactModal>
    </nav>
  );
};

export default Navbar2;
