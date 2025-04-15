import React from "react";
import location from "../../../assets/images/social-people.png"
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
        <div className="w-100 banner-services">
          <div className="container-md container-fluid h-full py-lg-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-auto">
              <img src={location} alt="banner-right" height={254} width={182} className="banner_right_img img-fluid" data-aos="fade-up" />
            </div>
            <div className="col-lg-5 col-md-6 col  text-end">
              <h2 className="text-yellow font-46 fw-700 mb-2 pe-4" data-aos="fade-up">Social Spark</h2>
              <h4 className="text-white font-24 fw-700 mb-3 mb-lg-4 pe-4" data-aos="fade-up">Digital Marketing Agency - Noida</h4>
<p className="font-18 text-white fw-500 pe-4 mb-0" data-aos="fade-up">Drive traffic, generate leads, and grow your business with proven strategies tailored for Noida businesses.</p>
            </div>
          </div>
          </div>
        </div>
    </>
  );  
};

export default Banner;