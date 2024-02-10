import React, { useState } from 'react';
import './Navbar2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import KonumModal from './KonumModal';
import CategoryModal from './CategoryModal';

const Navbar2 = () => {
  const [isKonumModalOpen, setIsKonumModalOpen] = useState(false);
  const [isKategoriModalOpen, setIsKategoriModalOpen] = useState(false);
  const [isSepetModalOpen, setIsSepetModalOpen] = useState(false); // 1. Sepet modalını açmak için state tanımı

  const handleSelect1 = () => {
    setIsKonumModalOpen(true);
  };

  const handleCloseKonumModal = () => {
    setIsKonumModalOpen(false);
  };

  const handleSelect2 = () => {
    setIsKategoriModalOpen(true);
  };

  const handleCloseKategoriModal = () => {
    setIsKategoriModalOpen(false);
  };

  const handleSelect3 = () => {
    setIsSepetModalOpen(true); // 2. Sepet modalını aç
  };

  const handleCloseSepetModal = () => {
    setIsSepetModalOpen(false); // 5. Sepet modalını kapat
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white m-4">
      <div className="container-fluid mx-auto ">
        <div className="ml-auto d-flex align-items-center">
          <button className="custom-button" type="button" onClick={handleSelect1}>
            Konum Seç <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button className="custom-button" type="button" onClick={handleSelect2}>
            Kategoriler <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <button className="custom-button-sepet" type="button" onClick={handleSelect3}>
            <FontAwesomeIcon icon={faShoppingCart} /> Sepetim <span className="price-info">$50.00</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

      {/* 3. Sepet Modal */}
      <Modal
        isOpen={isSepetModalOpen}
        onRequestClose={handleCloseSepetModal}
        contentLabel='Sepet Modalı'
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
        {/* Sepet içeriğini buraya yerleştirin */}
        <div>Sepet İçeriği</div>

        {/* Sepet modalını kapatma butonu */}
        <button onClick={handleCloseSepetModal}>Sepeti Kapat</button>
      </Modal>

      {/* Konum ve Kategori Modal bileşenleri */}
      <Modal
        isOpen={isKonumModalOpen}
        onRequestClose={handleCloseKonumModal}
        contentLabel='Konum Modalı'
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
        <KonumModal onClose={handleCloseKonumModal} />
      </Modal>
      <Modal
        isOpen={isKategoriModalOpen}
        onRequestClose={handleCloseKategoriModal}
        contentLabel='Kategori Modalı'
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
        <CategoryModal onClose={handleCloseKategoriModal} />
      </Modal>
    </nav>
  );
};

export default Navbar2;
