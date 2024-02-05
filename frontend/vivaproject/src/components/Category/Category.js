import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import meyve from '../../assets/meyvesebze.jpg';
import reklamcatg from '../../assets/reklamcatg.jpg';
import reklamcatg2 from '../../assets/reklamcatg2.jpg';
import reklamcatg3 from '../../assets/reklamcatg3.jpg';

const Category = () => {
  const navigate = useNavigate();
  const handleClick = (category) => {
    console.log(`${category} kategorisi tıklandı.`);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const adSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="container mt-2 mb-4 ">
      <h3 className="mb-4 mt-3 " style={{ fontSize: '40px' }}>Kategoriler</h3>
      <div className="row">
        {/* Sol tarafta büyük kategori kartları */}
        <div className="col-md-8">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="col-md-3 mb-2 px-3 ">
                <div className="card border-secondary" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <div className="position-relative" style={{ width: '100px', height: '100px', margin: 'auto' }}>
                    <img
                      className="img-fluid rounded-circle"
                      src={meyve}
                      alt={`Category ${index}`}
                      onClick={() => handleClick(category)}
                      style={{ cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text" style={{ fontSize: '12px' }}>{category}</p>
                  </div>
                </div>
              </div>
            ))}
            
          </Slider>
           {/* İkinci reklam resmi */}
          <div className="card border-secondary" style={{ borderRadius: '15px', overflow: 'hidden', marginTop: '35px' }}>
            <img
              className="img-fluid"
              src={reklamcatg2}
              alt="Reklam Kategori 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        </div>

        {/* Sağ tarafta reklam alanı */}
        <div className="col-md-4">
          
        <Slider {...adSliderSettings}>
            <div className="card border-secondary" style={{ borderRadius: '15px', overflow: 'hidden', marginBottom: '15px' }}>
              <img
                className="img-fluid"
                src={reklamcatg}
                alt="Reklam Kategori"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <div className="card border-secondary" style={{ borderRadius: '15px', overflow: 'hidden', marginBottom: '15px' }}>
              <img
                className="img-fluid"
                src={reklamcatg3}
                alt="Reklam Kategori 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
          </Slider>
          
        </div>
      </div>
    </div>
  );
};

export default Category;
