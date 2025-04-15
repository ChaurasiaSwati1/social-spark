import React from 'react';
import { Link } from 'react-router-dom';
const ContactSection = () => {
  return (
    <>
      <div className="w-100">
        <div
          className="container-md container-fluid h-full py-lg-5 py-4"
          data-aos="fade-up"
        >
          <div className="row align-items-center">
            <div className="col-12">
              <div
                className="bg-yellow-500 rounded text-center p-md-5 p-4"
                data-aos="fade-up"
              >
                <h2 className="font-34 fw-700 mb-lg-4 mb-3">
                  Ready to Grow Your Business in Noida?
                </h2>
                <p className="font-18 fw-500 mb-lg-4 mb-3">
                  Let’s build your brand, attract new customers, and increase
                  your online presence together.
                </p>
                <a href="/contact-us" className="btn btn-primary font-18 fw-600">
                  Get a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
