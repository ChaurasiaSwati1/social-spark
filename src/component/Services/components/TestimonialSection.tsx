import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
const TestimonialSection = () => {
  const testimonialData = [
    {
      name: 'Amit Sharma',
      position: 'Founder, GreenEdge Interiors',
      rating: 4,
      description:
        'Social Spark transformed our online presence. In just 3 months, we saw a 70% increase in local leads through their SEO and social media work. Highly recommend them for Noida businesses!',
    },
    {
      name: 'Priya Verma',
      position: 'Owner, Noida Smile Dental',
      rating: 4,
      description:
        'Their team is professional, responsive, and creative. Our PPC campaigns for our clinic have never performed better. Great results!',
    },
    {
      name: 'Rohit Mehra',
      position: 'Co-Founder, Craftsy Creations',
      rating: 5,
      description:
        'The new website Social Spark designed for us is beautiful, fast, and ranks well on Google. We get inquiries every day thanks to their SEO work.',
    },
  ];
  const renderStars = (rating: number) => (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="text-yellow me-1">
          {i <= rating ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </>
  );

  return (
    <>
      <div className="w-100 bg-light">
        <div className="container-md container-fluid py-lg-5 py-4" data-aos="fade-up">
          <h2 className="text-center text-yellow font-32 fw-700 mb-4 pb-lg-3">
            What Our Clients Say
          </h2>
          <div className="row justify-center">
            {testimonialData.map((testi, index) => (
              <div className="col-lg-4 col-sm-6 mb-4" data-aos="fade-up" key={index}>
                <div className="card border rounded bg-light h-100">
                  <div className="card-body px-4">
                    <p className="font-14 fw-500 mb-3">{testi.description}</p>
                    <p className="font-18 text-yellow fw-600 mb-0">{testi.name}</p>
                    <small>{testi.position}</small>
                    <div>{renderStars(testi.rating)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
