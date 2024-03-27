import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import loginlogo from '../../assets/loginlogo.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    // Kayıt ol butonuna tıklandığında /giris sayfasına yönlendirme yapılıyor
    navigate('/giris');
  };
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className='container d-flex align-items-center justify-content-center'>
      <section>
        <div className="container-fluid-login h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100 p-5">

            <div className="col-md-8 col-lg-9 col-xl-5 offset-xl-1" style={{ width: '400px', height: '600px' }}>
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-end">
                  <p className="lead fw-bold mb-3 me-3" style={{ color: '#ff7e00' }}>Kayıt Ol</p>
                </div>

                {/* Ad input */}
                <div className="form-outline mb-3">
                  <input type="text" id="form3Example1" className="form-control form-control-lg" placeholder="Ad" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                {/* Soyad input */}
                <div className="form-outline mb-3">
                  <input type="text" id="form3Example1" className="form-control form-control-lg" placeholder="Soyad" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                {/* Doğum Tarihi input */}
                <div className="form-outline mb-3">
                  <input type="date" id="form3Example2" className="form-control form-control-lg" />
                </div>

                {/* Telefon Numarası input */}
                <div className="form-outline mb-3">
                  <input type="tel" id="form3Example3" className="form-control form-control-lg" placeholder="Telefon Numarası" />
                </div>

                {/* Email input */}
                <div className="form-outline mb-3">
                  <input type="email" id="form3Example4" className="form-control form-control-lg" placeholder="E-posta Adresi" />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example5" className="form-control form-control-lg" placeholder="Şifre" />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example6" />
                    <label className="form-check-label" htmlFor="form2Example6">
                      Beni hatırla
                    </label>
                  </div>
                </div>

                <button type="button" className="btn btn-primary btn-floating mx-1 my-4">
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </button>

                <div className="text-center text-lg-start pt-2">
                  <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Kayıt Ol</button>
                  <p className="small mt-2 pt-1 mb-0" >Hesabınız var mı?
                    <a className="link-color fw-bold p-1"style={{ cursor: 'pointer' }} onClick={handleLoginClick}>
                      Giriş Yap
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
