import React from 'react';
import NewsletterForm from './NewsletterForm';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="fade-in">Slowburn Wood Co.</h1>
        <p className="tagline fade-in">"Hotter. Cleaner. Wilder."</p>
        <p className="fade-in" style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          Born from high desert drought-fallen wood, Slowburn is firecraft for the discerning host, 
          clean-burning, deeply fragrant, and made to last.
        </p>
        
        <div className="newsletter-section" style={{ background: 'transparent', padding: '3rem 0 0' }}>
          <h2 style={{ color: 'var(--color-cream)', marginBottom: '1rem' }}>Join the Slowburn Community</h2>
          <p style={{ color: 'var(--color-sand)', marginBottom: '2rem' }}>
            Be the first to know when our premium firewood bundles are available. 
            Sign up for exclusive updates and fire-hosting tips.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
