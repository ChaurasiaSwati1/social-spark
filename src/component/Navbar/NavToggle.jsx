import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import headerLogo from '../../assets/images/white_logo.jpg';

const NavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav-container d-md-none d-inline-block">
        <button
        aria-label="Nav"
          className={`nav-toggle-btn lh-1 ${isOpen ? 'fixed-btn' : ''}`}
          onClick={toggleNav}
        >
          {isOpen ? (
            <IoMdClose className="text-dark-yellow" size={20} />
          ) : (
            <GiHamburgerMenu className="text-dark-yellow" size={20} />
          )}
        </button>
        <div className={`nav-links w-100 ${isOpen ? 'open' : ''}`}>
          <div className="nav-menu-sec">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                `navLink me-md-4 font-18 ${isPending ? 'pending' : isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {/* <h1 className="text-yellow m-0 font-34">Social Spark</h1> */}
              <img src={headerLogo} alt="logo" height={45} width={106} />
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                `navLink me-md-4 font-18 ${isPending ? 'pending' : isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive, isPending }) =>
                `navLink me-md-4 font-18 ${isPending ? 'pending' : isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                `navLink me-md-4 font-18 ${isPending ? 'pending' : isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive, isPending }) =>
                `navLink font-18 ${isPending ? 'pending' : isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavToggle;
