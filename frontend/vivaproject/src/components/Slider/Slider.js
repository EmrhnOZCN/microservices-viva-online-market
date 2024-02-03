import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slidetop from '../../assets/ustslide.jpg';
import './Slider.css';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = document.querySelectorAll('.carousel-item');
    const slideWidth = slides[0].offsetWidth;

    const autoScroll = () => {
      slider.scrollLeft += slideWidth;

      // Slider'ın sonuna geldiyse, başa dön
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        // İlk slayta dön
        slider.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(autoScroll, 3000);

    // Component unmounted olduğunda clearInterval
    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    const slider = sliderRef.current;
    const slideWidth = slider.querySelector('.carousel-item').offsetWidth;

    console.log('Next Button Clicked');
    slider.scrollLeft += slideWidth;

    // Slider'ın sonuna geldiyse, başa dön
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      // İlk slayta dön
      slider.scrollLeft = 0;
    }
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    const slideWidth = slider.querySelector('.carousel-item').offsetWidth;

    console.log('Prev Button Clicked');
    slider.scrollLeft -= slideWidth;

    // Slider'ın başına geldiyse, sona dön
    if (slider.scrollLeft <= 0) {
      // Son slayta dön
      slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
    }
  };

  return (
    <div className="position-relative">
      {/* Üstteki Resim */}
      <img src={slidetop} alt="Additional Image" className="w-top" style={{ position: 'flex', top: '-10px', zIndex: 1 }} />

      {/* Slider */}
      <div id="carouselExample" className="carousel slide mt-3" data-bs-ride="carousel" ref={sliderRef}>
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
