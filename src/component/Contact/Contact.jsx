import React, { useState } from 'react';
import contact from '../../assets/images/contact.jpg';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    const email = 'swatic058@gmail.com';
    const subject = `New message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="container-md container-fluid py-lg-5 py-4">
      <h1 className="text-center mb-3 font-34 fw-700 text-yellow">
        Contact Us
      </h1>
      <p className="text-center mb-lg-5 mb-4 font-18">
        We’d love to hear from you — fill out the form or reach out directly.
      </p>
      <div className="row gx-lg-5">
        <div className="col-lg-5 col-md-5 col-12 mb-4 mb-md-0">
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-5 col-12">
              <div className="card mb-md-3 mb-sm-0 mb-3 overflow-hidden">
                <img
                  src={contact}
                  alt="card-img"
                  className="contact_img image-scale"
                  height="auto"
                  width="100%"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-7 col-12">
              <h4 className="text-yellow font-24 mb-3">Contact Information</h4>
              <p className="mb-2 font-18">
                <strong>Address:</strong> Sector 62, Noida, UP, India
              </p>
              <p className="mb-2 font-18">
                <strong>Phone:</strong> +91-9876543210
              </p>
              <p className="mb-0 font-18">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:socialspark@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  socialspark@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-12">
          <div className="card border-0 bg-light shadow contact_form p-4">
            <form onSubmit={handleSend} className="mb-5">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Message"
                      rows="5"
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary d-flex ms-auto" aria-label="Send">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
