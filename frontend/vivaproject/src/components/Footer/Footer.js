import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
  
    <div className=" position: 'fixed', bottom: 0, width: '100%'  " style={{ boxShadow: '0px 0px 3px 0px #000000' } } >
      {/* Footer */}
       
      <footer
        className="text-center text-lg-start text-black mt-5 "
        style={{ backgroundColor: '#f9f9f9' }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className="">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 ">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Viva
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-black">
                  İLETİŞİM
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Ankara
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> emrhnozcnceng@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 05309393557
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  TAKİP
                </h6>

                 {/* Facebook */}
                 <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#3b5998' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                {/* Twitter */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#55acee' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                {/* Google */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#dd4b39' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>

                {/* Instagram */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#ac2bac' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                {/* Linkedin */}
                <a
                  className="btn btn-primary btn-floating m-1 "
                  style={{ backgroundColor: '#0082ca' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                {/* Github */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#333333' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            {/* Grid row */}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        >
          © 2024 Telif Hakkı:
          <a className="text-black " href="https://mdbootstrap.com/">
              emrhnozcnceng@gmail.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    /* End of .container */
  );
};

export default Footer;
