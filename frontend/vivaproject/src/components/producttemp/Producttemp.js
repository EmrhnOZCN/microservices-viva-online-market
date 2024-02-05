import React, { useState, useEffect } from 'react';
import './Producttemp.css';
import Loader from '../Loader/Loader';
import img1 from '../../assets/meyvesebze.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown, faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons';
import Navbar2 from '../Navbar2/Navbar2';
import Navbar from '../Navbar/Navbar';
const Producttemp = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // New state for dropdown visibility
  const products = Array.from({ length: 6 }).map((_, index) => ({
    id: index,
    name: 'Meyve ve Sebze',
    price: '50.50 TL',
    image: img1,
  }));

  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
      setCategory(storedCategory);
    };
    fetchData();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
      
        <Navbar2></Navbar2>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3'>
                <h2>{category} Ürünleri</h2>
              </div>
              <div className='col-md-9'>
                <div>
                  <h2>{category} </h2>
                  <div className='dropdown-container'>
                    <button className='btnnn-oynerilenler' onClick={toggleDropdown}>
                      <FontAwesomeIcon icon={faDownLong} className={`arrow-updown2-icon ${showDropdown && 'active'}`} style={{ fontSize: '12px' }} />
                      <FontAwesomeIcon icon={faUpLong} className={`arrow-updown-icon ${showDropdown && 'active'}`} style={{ fontSize: '12px' }} />
                      Önerilenler
                      <FontAwesomeIcon icon={faChevronDown} className='arrow-down-icon' style={{ fontSize: '12px' }} />
                    </button>
                    {showDropdown && (
                      <div className='dropdown-content'>
                        {/* Dropdown content goes here */}
                        <p>Dropdown Item 1</p>
                        <p>Dropdown Item 2</p>
                        {/* Add more items as needed */}
                      </div>
                    )}
                  </div>
                </div>

                <div className='row'>
                  {products.map(product => (
                    <div key={product.id} className='col-md-4 mb-4 col-sm-6 col-lg-3'>
                      <div className='productsss'>
                        <div className='producttt-img'>
                          <img src={product.image} alt='Product'></img>
                        </div>
                        <h3 className='producttt-name'>{product.name}</h3>
                        <h1 className='producttt-price'>{product.price}</h1>
                        <button className='btnnn-buy'>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {products.map(product => (
                    <div key={product.id} className='col-md-4 mb-4 col-sm-6 col-lg-3'>
                      <div className='productsss'>
                        <div className='producttt-img'>
                          <img src={product.image} alt='Product'></img>
                        </div>
                        <h3 className='producttt-name'>{product.name}</h3>
                        <h1 className='producttt-price'>{product.price}</h1>
                        <button className='btnnn-buy'>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Producttemp;