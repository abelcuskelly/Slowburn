import React from 'react';
import NewsletterForm from '../components/NewsletterForm';

const Contact = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="about-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Get in Touch</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
              We'd love to hear from you. Whether you have questions about our products, 
              want to learn more about our sourcing practices, or are interested in 
              wholesale opportunities, we're here to help.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
              <div className="fade-in">
                <h3>Email</h3>
                <p style={{ fontSize: '1.1rem' }}>
                  <a href="mailto:hello@slowburnwood.com">hello@slowburnwood.com</a>
                </p>
              </div>
              
              <div className="fade-in">
                <h3>Website</h3>
                <p style={{ fontSize: '1.1rem' }}>
                  <a href="https://slowburnwood.com" target="_blank" rel="noopener noreferrer">slowburnwood.com</a>
                </p>
              </div>
              
              <div className="fade-in">
                <h3>Location</h3>
                <p style={{ fontSize: '1.1rem' }}>
                  High Desert, California
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="newsletter-section">
        <div className="container">
          <h2>Stay Updated</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            The best way to stay connected is through our mailing list. Be the first to know 
            about product launches, seasonal offerings, and exclusive fire-hosting tips.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
