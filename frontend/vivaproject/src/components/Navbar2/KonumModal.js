// KonumModal.js
import React from 'react';
import Modal from 'react-modal';
import { faAddressCard, faStore, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const KonumModal = ({ onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
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
      <button onClick={onClose} style={{ position: 'absolute', top: '-70px', right: '20px', fontSize: '52px', cursor: 'pointer', padding: '10px', border: 'none', background: 'none', color: '#000' }}>
        &#x2715;
      </button>
      <h3>Teslimat Yöntemini Belirle</h3>
      <div className="delivery-options">
        <button className="delivery-option-button" onClick={() => console.log('Adresime Gelsin')}>
          <img alt="address" src="assets/images/delivery/address.svg" className="icon" />
          <div className="subtitle-1 text-align-center">Adresime Gelsin</div>
        </button>
        <button className="delivery-option-button" onClick={() => console.log('Mağazadan Alacağım')}>
          <img alt="store" src="../../assets/store.svg" className="icon" />
          <div>
            <div className="subtitle-1">Mağazadan Alacağım</div>
            <div className="text-color-success mat-caption-normal free-delivery--label">Mağazadan Ücretsiz Teslimat!</div>
          </div>
        </button>
        <button className="delivery-option-button" onClick={() => console.log('Bağış Yapacağım')}>
          <img alt="foundation" src="assets/images/delivery/foundation.svg" className="icon" />
          <div className="subtitle-1 text-color-black text-align-center">Bağış Yapacağım</div>
        </button>
      </div>
    </Modal>
  );
};

export default KonumModal;
