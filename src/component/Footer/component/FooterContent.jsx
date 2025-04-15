import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../../assets/images/white_logo.jpg';
import { MdMailOutline } from "react-icons/md";

const FooterContent = () => {
  return (
    <>
      <div className="py-lg-5 py-4 bg-yellow-500">
        <div className="container-md container-fluid ">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <NavLink to="/">
                <img
                  src={headerLogo}
                  alt="logo"
                  height={45}
                  width={106}
                  className="mb-lg-4 mb-3"
                />
              </NavLink>
              <p className="font-14 text-white fw-600 pe-lg-4">
                Social Spark is a full-service digital marketing agency based in
                Noida. We help local businesses grow through smart SEO, engaging
                social media, and high-performing websites.
              </p>
            </div>
            <div className="col-md-3 col-6">
              <h5 className="fw-700 mb-lg-4 mb-3 font-24 text-white pe-lg-4">
                Quick Links
              </h5>
              <ul className="list-unstyled font-14">
                <li className="mb-2">
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services"
                    className="text-white text-decoration-none"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/contact-us"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <h5 className="fw-700 mb-lg-4 mb-3 font-24 text-white">
                Services
              </h5>
              <ul className="list-unstyled font-14">
                <li className="mb-2">
                  <a href="/" className="text-white text-decoration-none">
                    SEO
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="text-white text-decoration-none">
                    Social Media Marketing
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services"
                    className="text-white text-decoration-none"
                  >
                    PPC
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/contact-us"
                    className="text-white text-decoration-none"
                  >
                    Web Design & Development
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h5 className="fw-700 mb-lg-4 mb-3 font-24 text-white">
                Contact Us
              </h5>
              <p className="text-white fw-700 text_hoverable" >
              <MdMailOutline className="font-24"/>
                <a
                  href="mailto:socialspark@gmail.com"
                  className="text-white text-decoration-none ms-2"
                >
                  socialspark@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContent;
