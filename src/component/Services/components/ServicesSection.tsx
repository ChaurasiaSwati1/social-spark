import React from 'react';
import seo from '../../../assets/images/seo.png';
import socialMedia from '../../../assets/images/social-media.png';
import ppc from '../../../assets/images/PPC.png';
import web from '../../../assets/images/web.png';
const ServicesSection = () => {
  const servicesData = [
    {
      title: 'SEO (Search Engine Optimization)',
      description:
        'We help your business show up on Google when people in Greater Noida search for services like yours. From keyword research to content optimization and local SEO (including Google Business Profile management), we boost your website’s visibility so you attract more local customers.',
      image: seo,
      reverse: false,
    },
    {
      title: 'Social Media Marketing',
      description:
        "We manage your brand’s presence on platforms like Instagram, Facebook, and TikTok — where Greater Noida's creative and community-driven crowd hangs out. From content creation to engagement strategies and ad campaigns, we help build awareness, followers, and loyal customers.",
      image: socialMedia,
      reverse: true,
    },
    {
      title: 'PPC (Pay-Per-Click Advertising)',
      description:
        'With PPC, we create paid ad campaigns on Google, Facebook, and Instagram that put your business in front of the right people in Greater Noida and nearby areas. Whether it’s promoting a new product or driving more appointment bookings, we make sure your ad spend works harder for you.',
      image: ppc,
      reverse: false,
    },
    {
      title: 'Web Design & Development',
      description:
        'We design fast, modern, mobile-friendly websites that reflect your brand’s unique vibe and convert visitors into customers. Since Greater Noida is all about creativity and local flavor, we make sure your site stands out and works perfectly on any device',
      image: web,
      reverse: true,
    },
  ];
  return (
    <>
      <div className="w-100 bg-light">
        <div className="container-md container-fluid h-full py-lg-5 py-4">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h4 className="font-34 text-primary fw-700 mb-lg-5 mb-4 mb-lg-4 pe-4">
                Digital Marketing Services We Offer in Noida, Charlotte
              </h4>
            </div>
          </div>
          {servicesData.map((service, index) => (
            <div
              className={`row align-items-center ${
                service.reverse ? 'flex-row-reverse' : ''
              }`}
              key={index}
              data-aos="fade-up"
            >
              <div className="col-lg-6 col-sm-6 col-12">
                <img
                  src={service.image}
                  alt="card-img"
                  className="py-lg-4 py-3 service_img image-scale img-fluid"
                  height="auto"
                  width="100%"
                />
              </div>
              <div className="col-lg-6 col-sm-6 col-12">
                <h4 className="text-yellow font-24 fw-700 mb-3 mb-lg-4">
                  {service.title}
                </h4>
                <p className="font-18 fw-500 mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
