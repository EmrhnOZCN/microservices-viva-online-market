import React, { useEffect } from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import img1 from '../../assets/meyvesebze.jpg';

const Products = () => {
    useEffect(() => {
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        const slider = document.querySelector('.slider');
        const product = document.querySelector('.products');

        const autoScroll = () => {
            // Slider'ın sonuna geldiyse, başa taşı
            if (slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
                slider.scrollLeft = 0;
            } else {
                slider.scrollLeft += product.offsetWidth + 40;
            }
        };

        next.addEventListener('click', () => {
            autoScroll();
        });

        prev.addEventListener('click', () => {
            // Slider'ın başına geldiyse, sona taşı
            if (slider.scrollLeft === 0) {
                slider.scrollLeft = slider.scrollWidth;
            } else {
                slider.scrollLeft -= product.offsetWidth + 40;
            }
        });

        const intervalId = setInterval(autoScroll, 3000);

        return () => {
            clearInterval(intervalId);
            next.removeEventListener('click', autoScroll);
            prev.removeEventListener('click', autoScroll);
        };
    }, []);

    return (

        <div className='slider-container'>
          <button id='prev' className='btn-scroll'>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

        <div className='slider'>
            <div className='products'>
                <div className='product-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='product-name'>Meyve ve Sebze</h3>
                <h1 className='product-price'>50.50 TL</h1>
                <button className='btn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='products'>
                <div className='product-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='product-name'>Meyve ve Sebze</h3>
                <h1 className='product-price'>50.50 TL</h1>
                <button className='btn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='products'>
                <div className='product-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='product-name'>Meyve ve Sebze</h3>
                <h1 className='product-price'>50.50 TL</h1>
                <button className='btn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='products'>
                <div className='product-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='product-name'>Meyve ve Sebze</h3>
                <h1 className='product-price'>50.50 TL</h1>
                <button className='btn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='products'>
                <div className='product-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='product-name'>Meyve ve Sebze</h3>
                <h1 className='product-price'>50.50 TL</h1>
                <button className='btn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='products'>
                <div className='product-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='product-name'>Meyve ve Sebze</h3>
                <h1 className='product-price'>50.50 TL</h1>
                <button className='btn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='products'>
                <div className='product-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='product-name'>Meyve ve Sebze</h3>
                <h1 className='product-price'>50.50 TL</h1>
                <button className='btn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='products'>
                <div className='product-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='product-name'>Meyve ve Sebze</h3>
                <h1 className='product-price'>50.50 TL</h1>
                <button className='btn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
        </div>
        <button id='next' className='btn-scroll' >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Products;
