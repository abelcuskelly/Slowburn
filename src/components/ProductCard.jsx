import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card fade-in">
      <div className="product-image">
        <span className="coming-soon-badge">Coming Soon</span>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <ul className="product-features">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
