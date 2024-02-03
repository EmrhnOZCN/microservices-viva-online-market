import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slidetop from '../../assets/ustslide.jpg';
import './Slider.css';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Update the mod value for 4 slides
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center position-relative">
      {/* Üstteki Resim */}
      <img src={slidetop} alt="Additional Image" className="w-top" style={{ position: 'absolute', top: '-10px', zIndex: 1 }} />

      {/* Slider */}
      <div id="carouselExample" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <img src={slide1} className="d-block w-100" alt="First slide" />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img src={slide2} className="d-block w-100" alt="Second slide" />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <img src={slide3} className="d-block w-100" alt="Third slide" />
          </div>
          <div className={`carousel-item ${activeIndex === 3 ? 'active' : ''}`}>
            <img src={slide4} className="d-block w-100" alt="Fourth slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={handlePrevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={handleNextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
