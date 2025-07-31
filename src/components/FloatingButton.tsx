'use client';

import React from 'react';

const FloatingButton = () => {
  return (
    <a
      href="https://github.com/pamelamensah" // ← update with your actual GitHub URL
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'linear-gradient(to right, #a78bfa, #f0abfc)', // purple-pink gradient
        color: '#fff',
        fontWeight: 'bold',
        padding: '0.8rem 1.5rem',
        borderRadius: '9999px',
        boxShadow: '0 10px 15px rgba(0,0,0,0.3)',
        textDecoration: 'none',
        fontSize: '1rem',
        zIndex: 1000,
        transition: 'transform 0.2s ease-in-out',
        fontFamily: `'Poppins', 'Comic Neue', sans-serif`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
      }}
    >
      🐙 GitHub
    </a>
  );
};

export default FloatingButton;
