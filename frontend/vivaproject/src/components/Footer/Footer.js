import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="container my-5">
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: '#929fba' }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className="">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <a className="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a className="text-white">MDWordPress</a>
                </p>
                <p>
                  <a className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a className="text-white">Bootstrap Angular</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
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
                  className="btn btn-primary btn-floating m-1"
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
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
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
