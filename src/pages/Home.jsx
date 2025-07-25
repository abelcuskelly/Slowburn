import React from 'react';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';

const Home = () => {
  return (
    <>
      <Hero />
      
      <section className="values-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', color: 'var(--color-cream)', marginBottom: 'var(--spacing-lg)' }}>
            The Slowburn Difference
          </h2>
          <div className="values-grid">
            <div className="value-card slide-in-left">
              <div className="value-icon">🌲</div>
              <h3>Sustainably Sourced</h3>
              <p>Only naturally fallen or standing deadwood. No clearcutting, ever.</p>
            </div>
            <div className="value-card fade-in">
              <div className="value-icon">🔥</div>
              <h3>Premium Quality</h3>
              <p>Hand-selected, properly aged wood that burns hotter, cleaner, and longer.</p>
            </div>
            <div className="value-card slide-in-right">
              <div className="value-icon">✨</div>
              <h3>Artisan Crafted</h3>
              <p>Each bundle is wrapped with care in natural materials and branded by hand.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ProductsSection />
      
      <section className="newsletter-section">
        <div className="container">
          <h2>Stay Connected</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Join our community of intentional hosts and fire enthusiasts. 
            Get exclusive updates, fire-hosting tips, and be the first to know when our products launch.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
