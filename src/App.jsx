import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Simple test to see if this renders
const Navigation = () => (
  <nav style={{ padding: '1rem', background: '#2C1810', color: '#F5E6D3' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Slowburn Wood Co.</h1>
      <div>
        <a href="#/" style={{ color: '#F5E6D3', margin: '0 1rem' }}>Home</a>
        <a href="#/about" style={{ color: '#F5E6D3', margin: '0 1rem' }}>About</a>
        <a href="#/products" style={{ color: '#F5E6D3', margin: '0 1rem' }}>Products</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section style={{ 
    background: 'linear-gradient(135deg, #2C1810 0%, #4A3426 100%)', 
    color: '#F5E6D3', 
    padding: '6rem 2rem', 
    textAlign: 'center' 
  }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Slowburn Wood Co.</h1>
    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '2rem' }}>"Hotter. Cleaner. Wilder."</p>
    <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
      Born from high desert drought-fallen wood, Slowburn is firecraft for the discerning host, 
      clean-burning, deeply fragrant, and made to last.
    </p>
    <div style={{ background: '#D4B896', padding: '2rem', borderRadius: '8px', margin: '2rem auto', maxWidth: '600px' }}>
      <h2 style={{ color: '#2C1810', marginBottom: '1rem' }}>Join the Slowburn Community</h2>
      <form style={{ display: 'flex', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          style={{ 
            flex: 1, 
            padding: '1rem', 
            border: '2px solid #4A3426', 
            borderRadius: '4px',
            fontSize: '1rem'
          }} 
        />
        <button 
          type="submit" 
          style={{ 
            background: '#E25822', 
            color: 'white', 
            border: 'none', 
            padding: '1rem 2rem', 
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Join Waitlist
        </button>
      </form>
    </div>
  </section>
);

const ProductsSection = () => (
  <section style={{ padding: '6rem 2rem', background: '#F5E6D3' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#2C1810', marginBottom: '2rem' }}>Our Firecraft Collection</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
        Not just firewood. Fire craft. Each bundle is curated to ignite warmth, ritual, and wonder.
        Sourced only from naturally fallen or standing deadwood.
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginTop: '3rem'
      }}>
        {[
          {
            name: "Ember and Ash Fire Starter",
            description: "The perfect beginning to any fire experience. Our artisan starter kit includes everything you need for a flawless light."
          },
          {
            name: "Desert Embers & Flames", 
            description: "Our signature 'Cleanburn' blend of Piñon and Juniper, perfect for chimineas and intimate gatherings."
          },
          {
            name: "Earth Bones",
            description: "A robust collection for fireplace and firepit gatherings, bringing warmth and ritual to your space."
          },
          {
            name: "Last Light Logs",
            description: "For those who want the fire to last. Premium knotted logs that burn slow and steady through the night."
          },
          {
            name: "Flint & Spark Stoke Service",
            description: "The ultimate fire experience. Our flannel-clad Slowburn Lumberjack delivers and sets up your perfect fire."
          }
        ].map((product, index) => (
          <div key={index} style={{ 
            background: 'white', 
            borderRadius: '8px', 
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: '#E25822',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              Coming Soon
            </div>
            <div style={{ 
              height: '200px', 
              background: '#D4B896', 
              borderRadius: '4px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '4rem',
              marginBottom: '1rem'
            }}>
              🔥
            </div>
            <h3 style={{ color: '#2C1810', marginBottom: '1rem' }}>{product.name}</h3>
            <p style={{ color: '#666', lineHeight: 1.6 }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ background: '#2C1810', color: '#F5E6D3', padding: '4rem 2rem 2rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h4 style={{ marginBottom: '1rem' }}>Slowburn Wood Co.</h4>
      <p style={{ marginBottom: '1rem' }}>
        Premium firecraft for intentional hosting. Sourced only from naturally fallen or standing deadwood.
      </p>
      <p style={{ fontStyle: 'italic', opacity: 0.8, marginBottom: '2rem' }}>
        "Not just firewood. Fire craft."
      </p>
      <p style={{ opacity: 0.7 }}>&copy; 2024 Slowburn Wood Co. All rights reserved.</p>
    </div>
  </footer>
);

const Home = () => (
  <>
    <Hero />
    <ProductsSection />
  </>
);

const About = () => (
  <div style={{ padding: '6rem 2rem', minHeight: '400px', textAlign: 'center' }}>
    <h1>About Slowburn Wood Co.</h1>
    <p>Our story of sustainable firecraft coming soon...</p>
  </div>
);

const Products = () => (
  <div style={{ paddingTop: '6rem' }}>
    <ProductsSection />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
