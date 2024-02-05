import React from 'react';
import Modal from 'react-modal';
import img1 from '../../assets/meyvesebze.jpg';
import './CategoryModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAddressCard, faStore, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const CategoryModal = ({ onClose }) => {
  const navigate = useNavigate();
  const categories = [
    "Tüm İndirimli Ürünler",
    "Sadece Viva'a",
    "Migroskop",
    "Meyve, Sebze",
    "Et, Tavuk, Balık",
    "Süt, Kahvaltılık",
    "Temel Gıda",
    "Dondurma",
    "Atıştırmalık",
    "Fırın, Pastane",
    "Deterjan, Temizlik",
    "Kağıt, Islak Mendil",
    "Bebek",
    "Ev, Yaşam",
    "Çiçek",
    "Pet Shop",
    "Elektronik"
  ];
  const handleCategoryClick = (category) => {
    onClose(); // Modal'ı kapat
    localStorage.setItem('selectedCategory', category);
    const formattedCategory = category
      .toLowerCase()
      .replace(/[üÜ]/g, 'u')
      .replace(/[ıİ]/g, 'i')
      .replace(/[öÖ]/g, 'o')
      .replace(/[çÇ]/g, 'c')
      .replace(/[şŞ]/g, 's')
      .replace(/[ğĞ]/g, 'g')
      .replace(/[^\w\s]/gi, '')
      .replace(/\s/g, '-');

    navigate(`/${formattedCategory}`);
    window.location.reload();
    
  };

  return (
    <Modal
    isOpen={true}
    onRequestClose={onClose}
    contentLabel='Kategori Modalı'
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          width: '100%',
          maxWidth: '800px',
          height: 'auto',
          maxHeight: '600px', // Adjusted max height
          margin: 'auto', // Center the modal horizontally
          marginTop: '20px', // Add top margin for spacing
          marginBottom: '150px', // Adjusted bottom margin
          border: 'none',
          borderRadius: '15px',
          backgroundColor: '#fff',
          padding: '15px', // Adjusted padding
          overflow: 'visible',
          position: 'relative',
        },
      }}
    >
      <button onClick={onClose} style={{ position: 'absolute', top: '1px', right: '10px', fontSize: '24px', cursor: 'pointer', padding: '5px', border: 'none', background: 'none', color: 'black' }}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h3 style={{ textAlign: 'center' }}>Kategoriler</h3>

      <div className="categories-container">
        {categories.map((category, index) => (
          <button key={index} className="category-button" onClick={() => handleCategoryClick(category)}>
            <img src={img1} alt={`Category ${index}`} />
            {category}
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default CategoryModal;
