import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Ember and Ash Fire Starter",
    description: "The perfect beginning to any fire experience. Our artisan starter kit includes everything you need for a flawless light.",
    features: [
      "Wood shavings & pine sap resin",
      "Desert sage leaves & dried pine needles",
      "Juniper twigs & split aged kindling",
      "Sap soaked lighter wick & flint"
    ]
  },
  {
    id: 2,
    name: "Desert Embers & Flames",
    description: "Our signature 'Cleanburn' blend of Piñon and Juniper, perfect for chimineas and intimate gatherings.",
    features: [
      "Piñon + Juniper chiminea wood blend",
      "Half night or Full night size options",
      "Juniper branches & split pine rounds",
      "Desert Cleansing bundle included"
    ]
  },
  {
    id: 3,
    name: "Earth Bones",
    description: "A robust collection for fireplace and firepit gatherings, bringing warmth and ritual to your space.",
    features: [
      "Split piñon pine & juniper wood",
      "Wild kindling mix",
      "Desert Ritual bundle included",
      "Dried sage, lavender & palo-santo"
    ]
  },
  {
    id: 4,
    name: "Last Light Logs",
    description: "For those who want the fire to last. Premium knotted logs that burn slow and steady through the night.",
    features: [
      "Three bigger, knotted logs",
      "Optional single log add-on",
      "Perfect for fireplace or firepits",
      "Extended burn time"
    ]
  },
  {
    id: 5,
    name: "Flint & Spark Stoke Service",
    description: "The ultimate fire experience. Our flannel-clad Slowburn Lumberjack delivers and sets up your perfect fire.",
    features: [
      "Professional fire setup service",
      "Choose Desert Embers or Earth Bones",
      "Includes Late Night Yule Log",
      "Themed setup by local craftsman"
    ]
  }
];

const ProductsSection = () => {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Firecraft Collection</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            Not just firewood. Fire craft. Each bundle is curated to ignite warmth, ritual, and wonder.
            Sourced only from naturally fallen or standing deadwood.
          </p>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
