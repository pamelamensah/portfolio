'use client';

import React, { useRef, useState } from 'react';

const SoundToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '-3rem 0 -1rem 0' }}>

      <button
        onClick={toggleSound}
        style={{
          padding: '0.4rem 1.4rem',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          color: '#333',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: `'Poppins', 'Comic Neue', sans-serif`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
        }}
      >
        {isPlaying ? '🔇 Mute' : '🔊 Play'}
      </button>
      <audio ref={audioRef} loop src="/soundtrack.mp3" />
    </div>
  );
};

export default SoundToggle;
