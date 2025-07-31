'use client';

import React from 'react';
import SoundToggle from './SoundToggle';

const Header = () => {
  return (
    <section style={{ width: '100%', margin: 0, padding: 0 }}>
      <div style={{ position: 'relative', height: '540px', overflow: 'hidden' }}>
        {/* 🌿 Background Image */}
        <img
          src="/forest-bg.png"
          alt="Dreamy forest background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.85)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />

        {/* 🌸 Overlay Title */}
        <div
          style={{
            position: 'absolute',
            top: '38%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: '2.6rem', fontFamily: `'DM Serif Display', serif` }}>
            Pamela Mensah 🌸
          </h1>
          <p
            style={{
              fontFamily: `'Quicksand', sans-serif`,
              fontSize: '1.1rem',
              fontWeight: 500,
              marginTop: '0.3rem',
            }}
          >
            Dreamy Coder & Creative Builder
          </p>
        </div>

        {/* 🧁 Navigation Bar */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(18px)',
            borderRadius: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 12px 30px rgba(170, 120, 255, 0.25), 0 4px 8px rgba(255, 255, 255, 0.3)',
            padding: '1rem 2rem',
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            display: 'flex',
            gap: '1.5rem',
          }}
        >
          {['About', 'Work', 'Contact'].map((text, index) => (
            <a
              key={index}
              href={`#${text.toLowerCase()}`}
              style={{
                background: 'linear-gradient(to right, #fda4af, #fbcfe8)',
                color: '#fff',
                fontWeight: 'bold',
                padding: '0.6rem 1.5rem',
                borderRadius: '1.5rem',
                fontSize: '1.05rem',
                fontFamily: `'Poppins', 'Comic Neue', sans-serif`,
                boxShadow: '0 4px 10px rgba(255, 105, 180, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(255, 105, 180, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(255, 105, 180, 0.2)';
              }}
            >
              {text}
            </a>
          ))}
        </div>

        {/* 🔊 Sound Toggle — bottom right corner */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            zIndex: 4,
          }}
        >
          <SoundToggle />
        </div>
      </div>
    </section>
  );
};

export default Header;
