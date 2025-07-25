import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email address');
      return;
    }

    console.log('Email submitted:', email);
    setStatus('Thank you for joining our mailing list!');
    setEmail('');
    
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <div>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="newsletter-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Join Waitlist
        </button>
      </form>
      {status && (
        <p style={{ 
          marginTop: '1rem', 
          color: status.includes('Thank you') ? 'var(--color-sage)' : 'var(--color-flame)',
          fontWeight: '500'
        }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
