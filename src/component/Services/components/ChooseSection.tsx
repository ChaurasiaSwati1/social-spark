import React from 'react';
import { Link } from 'react-router-dom';
const ChooseSection = () => {
  return (
    <>
      <div className="w-100">
        <div className="container-md container-fluid h-full py-lg-5 py-4" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h4 className="font-34 text-yellow fw-700 mb-lg-5 mb-4 mb-lg-4 pe-4">
                Why Choose Social Spark in Noida?
              </h4>
            </div>
            <div className="col-lg-5 col-sm-6 col-12 offset-lg-1">
              <ul className="custom-list mb-0 mb-lg-3">
                <li className="font-18 fw-500 mb-3">
                  Local expertise and market understanding
                </li>
                <li className="font-18 fw-500 mb-3">
                  Proven track record with Noida-based clients
                </li>
              </ul>
            </div>{' '}
            <div className="col-lg-5 col-sm-6 col-12">
              <ul className="custom-list">
                <li className="font-18 fw-500 mb-3">
                  Transparent pricing with custom packages
                </li>
                <li className="font-18 fw-500 mb-3">
                  Dedicated account managers
                </li>
              </ul>
            </div>
            <div className="col-12 text-center">
              <Link
                to="/contact-us"
                className="btn-primary btn cta-btn text-white font-18 text-decoration-none mt-3 me-4"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseSection;
