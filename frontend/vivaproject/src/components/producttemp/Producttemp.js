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
              <div className='col-md-3  border'>
            
                  <div className='col-md-12 bg-gray mb-3 p-4 border-bottom'>
                  <h2>{category} </h2>
                  <span>573 ürün</span>
                  </div>
                  <div className='col-md-8 bg-gray mb-3 p-4 border-bottom'>
                      <h3>Alt Kategoriler</h3>
                      <p>Kırmızı Et (153)</p>
                      <p>Kırmızı Et (153)</p>
                      <p>Kırmızı Et (153)</p>
                      <p>Kırmızı Et (153)</p>
                  </div>
                  <div className='col-md-12 bg-gray mb-3 p-4 border-bottom'>

        <h3 className='mb-4'>Markalar</h3>
        <div className="input-group mb-4">
            <input type="text" className="form-control" placeholder="Marka Ara" aria-label="Marka Ara" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Ara</button>
            </div>
        </div>
        <div className="overflow-auto mt-2 mb-4" style={{ maxHeight: '150px' }}>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka1" />
                <label className="form-check-label" htmlFor="marka1">
                    Marka İsmi 1
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="marka2" />
                <label className="form-check-label" htmlFor="marka2">
                    Marka İsmi 2
                </label>
            </div>

            {/* Diğer markalar buraya eklenmeli */}
        </div>
    </div>
                  <div className='col-md-12 bg-gray p-4'>
                      <h3>İndirimler</h3>
                      <p>Money İndirimli Market Ürünleri (85)</p>
                  </div>

              </div>
              <div className='col-md-9'>
                <div className=''>
                  <h2 className=''>{category} </h2>
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