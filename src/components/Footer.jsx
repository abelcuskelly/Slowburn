import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Slowburn Wood Co.</h4>
            <p style={{ marginBottom: '1rem' }}>
              Premium firecraft for intentional hosting. 
              Sourced only from naturally fallen or standing deadwood.
            </p>
            <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
              "Not just firewood. Fire craft."
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Values</h4>
            <ul>
              <li>Sustainability</li>
              <li>Quality Craftsmanship</li>
              <li>Natural Materials</li>
              <li>Intentional Living</li>
              <li>Community</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: hello@slowburnwood.com</p>
            <p>Website: slowburnwood.com</p>
            <p style={{ marginTop: '1rem' }}>
              Join our mailing list above to be notified when our premium firewood bundles become available.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Slowburn Wood Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
