import React from 'react';

const PricingSection = () => {
  const pricingData = [
    {
      title: 'Starter',
      price: '₹9,999/month',
      features: [
        'Local SEO Setup',
        '8 Social Media Posts',
        {
          label: 'Google Business Optimization',
          subFeatures: ['Profile Setup', 'Photo Upload', 'Review Management'],
        },
        'Basic PPC Campaign',
      ],
    },
    {
      title: 'Growth',
      price: '₹19,999/month',
      features: [
        'SEO & Content Marketing',
        '15 Social Media Posts',
        {
          label: 'PPC Campaigns',
          subFeatures: ['2 Campaigns', 'Audience Targeting', 'Budget Management'],
        },
        'Monthly Performance Report',
      ],
    },
    {
      title: 'Pro',
      price: '₹29,999/month',
      features: [
        'Full SEO Services',
        '30+ Social Media Posts',
        {
          label: 'PPC Campaigns + Retargeting',
          subFeatures: ['4 Campaigns', 'Retargeting Setup', 'Ad Copywriting'],
        },
        'Monthly Strategy Call',
      ],
    },
  ];

  return (
    <div className="w-100">
      <div className="container-md container-fluid py-lg-5 py-4" data-aos="fade-up">
        <h2 className="text-center text-yellow font-32 fw-700 mb-5">
          Our Packages
        </h2>

        <div className="row justify-center">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="col-lg-4 col-sm-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="p-4 border rounded h-100 scale">
                <h4 className="font-24 fw-700 mb-3">{plan.title}</h4>
                <h5 className="text-yellow font-28 fw-700 mb-3">
                  {plan.price}
                </h5>

                <ul className="list-unstyled custom-list font-16 fw-500 mb-4">
                  {plan.features.map((feature, i) =>
                    typeof feature === 'string' ? (
                      <li key={i}>{feature}</li>
                    ) : (
                      <li key={i}>
                        {feature.label}
                        <ul className="list-unstyled ms-3 mt-2">
                          {feature.subFeatures.map((sub, subIndex) => (
                            <li key={subIndex}>- {sub}</li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>

                <a
                  href="/contact-us"
                  className="btn btn-dark-yellow text-white font-16 fw-600"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
