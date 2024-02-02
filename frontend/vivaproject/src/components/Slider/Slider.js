import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slidetop from '../../assets/ustslide.jpg';
import './Slider.css';

const Slider = () => {
  return (
    <div className="position-relative">
      {/* Üstteki Resim */}
      <img src={slidetop} alt="Additional Image" className="w-top" style={{ position: 'flex', top: '-10px', zIndex: 1 }} />

      {/* Slider */}
      <div id="carouselExample" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
