'use client';

import React, { useState } from 'react';
import ResumeModal from './ResumeModal';

const AboutSection = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="about"
      style={{
        maxWidth: '900px',
        margin: '-4em 4rem auto',
        padding: '2.5rem',
        borderRadius: '2rem',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        color: '#333',
        textAlign: 'center',
        lineHeight: '1.7',
        fontFamily: `'Comic Neue', 'Poppins', 'Segoe UI', sans-serif`,
      }}
    >
      <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#2d1b69', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>🌸 About Me</h2>
      <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.6', marginBottom: '1rem' }}>
      Hi, I am Pamela. Thanks for clicking on my website. I am a software engineer with a passion for building user-friendly, high-performance interfaces. I am currently a student at Loyola University Chicago, where I am studying Computer Science.
      </p>

      <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <button
          onClick={() => setShowResume(true)}
          style={{
            background: 'linear-gradient(to right, #fda4af, #fbcfe8)',
            color: '#fff',
            fontWeight: 600,
            padding: '0.8rem 1.6rem',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          💼 View Resume
        </button>

        <a
          href="https://www.linkedin.com/in/pamelamensah"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(to right, #c2e9fb, #a1c4fd)',
            color: '#fff',
            fontWeight: 600,
            padding: '0.8rem 1.6rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          💫 LinkedIn
        </a>
      </div>

      <ResumeModal show={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
};

export default AboutSection;
