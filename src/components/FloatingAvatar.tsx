'use client';

import React from 'react';

const FloatingAvatar = () => {
  return (
    <img
      src="/avatar.png"
      alt="Pamela Avatar"
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        animation: 'float 4s ease-in-out infinite',
        zIndex: 999,
      }}
    />
  );
};

export default FloatingAvatar;
