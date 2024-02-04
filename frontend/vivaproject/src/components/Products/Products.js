import React, { useEffect } from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import img1 from '../../assets/meyvesebze.jpg';

const Products = () => {
    useEffect(() => {
        const prevv = document.getElementById('prevv');
        const nextt = document.getElementById('nextt');

        const sliderr = document.querySelector('.sliderr');
        const productt = document.querySelector('.productss');

        const autoScroll = () => {
            // Slider'ın sonuna geldiyse, başa taşı
            if (sliderr.scrollLeft + sliderr.clientWidth === sliderr.scrollWidth) {
                sliderr.scrollLeft = 0;
            } else {
                sliderr.scrollLeft += productt.offsetWidth + 40;
            }
        };

        nextt.addEventListener('click', () => {
            autoScroll();
        });

        prevv.addEventListener('click', () => {
            // Slider'ın başına geldiyse, sona taşı
            if (sliderr.scrollLeft === 0) {
                sliderr.scrollLeft = sliderr.scrollWidth;
            } else {
                sliderr.scrollLeft -= productt.offsetWidth + 40;
            }
        });

        const intervalId = setInterval(autoScroll, 3000);

        return () => {
            clearInterval(intervalId);
            nextt.removeEventListener('click', autoScroll);
            prevv.removeEventListener('click', autoScroll);
        };
    }, []);

    return (
        <div className='container'>
            <h3 className="mt-5" style={{ fontSize: '40px' }}>Fırsat Ürünleri</h3>
        <div className='sliderr-containerr'>
       
        <button id='prevv' className='btnn-scroll'>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        <div className='sliderr'>
        
            <div className='productss'>
                <div className='productt-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='productt-name'>Meyve ve Sebze</h3>
                <h1 className='productt-price'>50.50 TL</h1>
                <button className='btnn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='productss'>
                <div className='productt-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='productt-name'>Meyve ve Sebze</h3>
                <h1 className='productt-price'>50.50 TL</h1>
                <button className='btnn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='productss'>
                <div className='productt-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='productt-name'>Meyve ve Sebze</h3>
                <h1 className='productt-price'>50.50 TL</h1>
                <button className='btnn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='productss'>
                <div className='productt-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='productt-name'>Meyve ve Sebze</h3>
                <h1 className='productt-price'>50.50 TL</h1>
                <button className='btnn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='productss'>
                <div className='productt-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='productt-name'>Meyve ve Sebze</h3>
                <h1 className='productt-price'>50.50 TL</h1>
                <button className='btnn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='productss'>
                <div className='productt-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='productt-name'>Meyve ve Sebze</h3>
                <h1 className='productt-price'>50.50 TL</h1>
                <button className='btnn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='productss'>
                <div className='productt-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='productt-name'>Meyve ve Sebze</h3>
                <h1 className='productt-price'>50.50 TL</h1>
                <button className='btnn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
            <div className='productss'>
                <div className='productt-img'>
                    <img src={img1} alt="Product"></img>
                </div>
                <h3 className='productt-name'>Meyve ve Sebze</h3>
                <h1 className='productt-price'>50.50 TL</h1>
                <button className='btnn-buy'>
                    <FontAwesomeIcon icon={faPlus} /> Sepete Ekle
                </button>
            </div>
        </div>
        <button id='nextt' className='btnn-scroll' >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div></div>
    );
};

export default Products;
