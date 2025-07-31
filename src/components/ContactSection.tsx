'use client';

import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      style={{
        maxWidth: '700px',
        margin: '4rem 5rem auto',
        padding: '2rem',
        borderRadius: '2rem',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
        color: '#333',
        textAlign: 'center',
        animation: 'float 6s ease-in-out infinite',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2d1b69', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>💌 Contact Me</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555', lineHeight: '1.6' }}>
        Have a question, collab idea, or just want to say hi? I'd love to hear from you!
      </p>
      <form
        action="https://formsubmit.co/pmensah1@luc.edu"
        method="POST"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          style={{ ...inputStyle, resize: 'none' }}
        />
        <button
          type="submit"
          style={{
            background: 'linear-gradient(to right, #c2e9fb, #a1c4fd)',
            border: 'none',
            borderRadius: '9999px',
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#fff',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Send ✨
        </button>
      </form>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '500px',
  padding: '0.8rem 1rem',
  borderRadius: '1rem',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  background: 'rgba(255, 255, 255, 0.8)',
  color: '#333',
  fontSize: '1rem',
  outline: 'none',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
};

export default ContactSection;
