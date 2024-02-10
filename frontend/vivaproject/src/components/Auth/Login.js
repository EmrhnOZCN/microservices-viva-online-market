import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import loginlogo from '../../assets/loginlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../Loader/Loader';
import ReCAPTCHA from 'react-google-recaptcha'; // Google reCAPTCHA ekledik

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState(null); // reCAPTCHA değeri için state ekledik


  
  useEffect(() => {
    localStorage.removeItem('selectedCategory');
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);



  const handleRegisterClick = () => {

    // Kayıt ol butonuna tıklandığında /kayit-ol sayfasına yönlendirme yapılıyor
    navigate('/kayit-ol');
  };


  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleLogin = () => {
    if (captchaValue) {
      // reCAPTCHA doğrulaması başarılı ise giriş işlemini gerçekleştir
      console.log('reCAPTCHA doğrulaması başarılı!');
      // Buraya giriş işlemlerini ekleyin
    } else {
      alert('Lütfen reCAPTCHA doğrulamasını tamamlayın!');
    }
  };

  return (
    <div >
    {isLoading && <Loader />}
    {!isLoading && (
      <>
        <div className='container d-flex align-items-center  justify-content-center ' >
          <section >
            <div className="container-fluid-login h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-4 col-lg-3 col-xl-3">
                  <img src={loginlogo}
                    className="img-fluid" alt="Örnek resim" />
                </div>
                <div className="col-md-8 col-lg-9 col-xl-5 offset-xl-1 " >
                  <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-end ">
  <p className="lead fw-normal mb-4 me-3  " style={{ color: '#ff7e00' }}>Giriş Yap</p>
</div>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control form-control-lg"
                        placeholder="Geçerli bir e-posta adresi girin" />
                    
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-3">
                      <input type="password" id="form3Example4" className="form-control form-control-lg"
                        placeholder="Şifre girin" />
                   
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      {/* Checkbox */}
                      <div className="form-check mb-0">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          Beni hatırla
                        </label>
                      </div>
                      <a href="#!" className="text-body">Şifremi unuttum?</a>
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

                    <div className="text-center text-lg-start pt-2 ">
                    <ReCAPTCHA
                        sitekey="6Lc5U24pAAAAANFPw_NAGl8ouzadd5aThfuaP3lI
                        " // Buraya kendi site anahtarınızı girin
                        onChange={handleCaptchaChange} // reCAPTCHA değeri değiştiğinde bu işlevi çağırır
                      />
                      <button type="button" className="btn btn-primary btn-lg mt-3"
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Giriş Yap</button>
                       <p className="small mt-2 pt-1 mb-0">Hesabınız yok mu? 
              <a  className="link-color fw-bold p-1 " onClick={handleRegisterClick} style={{ cursor: 'pointer' }}>
                Kayıt Ol
              </a>
            </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )}
  </div>
);
};  

export default Login;
