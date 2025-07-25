import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text slide-in-left">
              <h1>Our Story</h1>
              <p>
                Slowburn Wood Co. was born from a simple belief: that gathering around fire 
                should be more than functional—it should be intentional, beautiful, and meaningful.
              </p>
              <p>
                We source our wood exclusively from naturally fallen or standing deadwood in the 
                high desert, ensuring that every bundle tells a story of sustainability and respect 
                for nature. Each piece is hand-selected, properly aged, and crafted with care.
              </p>
              <p>
                Our mission is to provide sensory firecraft experiences that transform ordinary 
                gatherings into unforgettable moments. From backyard dinner parties to boutique 
                retreats, we believe in the timeless magic of gathering around flame.
              </p>
            </div>
            <div className="about-image slide-in-right">
              🔥
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
