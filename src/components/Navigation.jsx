import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/">
          <img src="/slowburn-logo.png" alt="Slowburn Wood Co." className="logo" />
        </Link>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link></li>
          <li><Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
