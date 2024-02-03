import React from 'react';
import Slider from '../Slider/Slider';
import meyve from '../../assets/meyvesebze.jpg';

const Category = () => {
  const handleClick = (category) => {
    // Tıklanabilir resmin işlemlerini buraya ekleyebilirsiniz
    console.log(`${category} kategorisi tıklandı.`);
  };

  const categories = [
    'Tüm İndirimli Ürünler',
    'Sadece Viva\'a',
    'Migroskop',
    'Meyve, Sebze',
    'Et, Tavuk, Balık',
    'Süt, Kahvaltılık',
    'Temel Gıda',
    'Dondurma',
    'Atıştırmalık',
    'Fırın, Pastane',
    'Deterjan, Temizlik',
    'Kağıt, Islak Mendil',
    'Bebek',
    'Ev, Yaşam',
    'Çiçek',
    'Pet Shop',
    'Elektronik',
  ];

  return (
    <div className="container mt-3">
      {/* Kategoriler Başlığı */}
      <h3 className="text-center mb-2">Kategoriler</h3>

      {/* Kartlar */}
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-2 mb-2">
            <div className="card border-secondary" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div className="position-relative">
                <img
                  className="img-fluid rounded-circle"
                  src={meyve}
                  alt={`Category ${index}`}
                  onClick={() => handleClick(category)}
                  style={{ cursor: 'pointer', width: '120px', height: '120px' }}
                />
              </div>
              <div className="card-body text-center">
                <p className="card-text">{category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
