import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAddressCard, faStore, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

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
          margin: 'auto', // Center horizontally and vertically
          border: 'none',
          borderRadius: '15px',
          backgroundColor: '#fff',
          padding: 20,
          overflow: 'visible',
          position: 'relative',
        },
      }}
    >
      <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '24px', cursor: 'pointer', padding: '5px', border: 'none', background: 'none', color: '#000' }}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h3 style={{ textAlign: 'center' }}>Merhaba!</h3>
      <p style={{ textAlign: 'center', fontSize: '18px', margin: '10px 0' }}>Siparişini nasıl getirelim?</p>
      <div className="delivery-options" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button className="delivery-option-button" style={{ borderRadius: '15px', width: '80%', marginBottom: '12px' }} onClick={() => console.log('Adresime Gelsin')}>
          <FontAwesomeIcon icon={faAddressCard} className="icon" />
          <div className="subtitle-1 text-align-center">Adresime Gelsin</div>
        </button>
        <button className="delivery-option-button" style={{ borderRadius: '15px', width: '80%', marginBottom: '12px' }} onClick={() => console.log('Mağazadan Alacağım')}>
          <FontAwesomeIcon icon={faStore} className="icon" />
          <div>
            <div className="subtitle-1">Mağazadan Alacağım</div>
            <div className="text-color-success mat-caption-normal free-delivery--label">Mağazadan Ücretsiz Teslimat!</div>
          </div>
        </button>
        <button className="delivery-option-button" style={{ borderRadius: '15px', width: '80%', marginBottom: '12px' }} onClick={() => console.log('Bağış Yapacağım')}>
          <FontAwesomeIcon icon={faHandHoldingHeart} className="icon" />
          <div className="subtitle-1 text-color-black text-align-center">Bağış Yapacağım</div>
        </button>
      </div>
    </Modal>
  );
};

export default KonumModal;
