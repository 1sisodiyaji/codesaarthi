import React from 'react';

const SingleGigs = ({ gig }) => {
  return (
    <div className="gig-details">
      <h1>{gig.title}</h1>
      <img src={gig.mainImage} alt={gig.title} className="main-image" />
      <p>{gig.description}</p>

      <div className="details-section">
        <h2>Key Features</h2>
        <ul>
          {gig.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="specs-section">
        <h2>Specifications</h2>
        <p>{gig.specifications}</p>
      </div>

      <div className="testimonials-section">
        <h2>Client Testimonials</h2>
        {gig.testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <p>"{testimonial.text}"</p>
            <footer>- {testimonial.author}</footer>
          </blockquote>
        ))}
      </div>

      <div className="pricing-section">
        <h2>Pricing</h2>
        <p>{gig.pricing}</p>
      </div>

      <div className="cta-section">
        <button className="btn">Get Started</button>
        <button className="btn">Request a Quote</button>
      </div>

      <div className="related-gigs">
        <h2>Related Gigs</h2>
        {/* Add logic to display related gigs */}
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        {/* Add contact form or details */}
      </div>

      <div className="faq-section">
        <h2>FAQs</h2>
        {gig.faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleGigs;
