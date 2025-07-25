import React from 'react';
import ProductsSection from '../components/ProductsSection';
import NewsletterForm from '../components/NewsletterForm';

const Products = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--color-cream)' }}>Our Firecraft Collection</h1>
          <p className="tagline">"Sourced only from naturally fallen or standing deadwood"</p>
        </div>
      </section>
      
      <ProductsSection />
      
      <section className="newsletter-section">
        <div className="container">
          <h2>Be First to Know</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Our premium firewood bundles are coming soon. Join our waitlist to be notified 
            the moment they become available for purchase.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default Products;
