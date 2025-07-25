import React from 'react';
import NewsletterForm from '../components/NewsletterForm';

const Blog = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="about-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Fire Stories</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
              Coming soon: Stories from the hearth, fire-hosting tips, and insights into 
              the art of intentional gathering.
            </p>
            
            <div style={{ background: 'var(--color-sand)', padding: '4rem', borderRadius: '8px', marginTop: '3rem' }}>
              <h2 style={{ color: 'var(--color-dark-wood)', marginBottom: '1rem' }}>
                Blog Launching Soon
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                We're currently crafting content that celebrates the ritual of fire, 
                shares hosting wisdom, and explores the beauty of natural materials.
              </p>
              <p>
                Join our mailing list below to be notified when our first stories go live.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="newsletter-section">
        <div className="container">
          <h2>Don't Miss a Story</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Subscribe to receive our latest fire stories, seasonal tips, and 
            exclusive content straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default Blog;
