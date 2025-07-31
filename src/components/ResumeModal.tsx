'use client';

import React, { useEffect } from 'react';

interface ResumeModalProps {
  show: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ show, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'fadeIn 0.4s ease',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(to bottom right, #fdf6ff, #f3e8ff)',
          borderRadius: '2rem',
          padding: '2rem',
          width: '90%',
          maxWidth: '720px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          color: '#333',
          position: 'relative',
          fontFamily: `'Comic Neue', 'Poppins', sans-serif`,
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1.5rem',
            fontSize: '1.5rem',
            background: 'none',
            border: 'none',
            color: '#ff4fa2',
            cursor: 'pointer',
          }}
        >
          ✖
        </button>

        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            color: '#b83280',
          }}
        >
          💼 My Resume
        </h2>

        <iframe
          src="https://docs.google.com/document/d/11Mwjw04Wps_ACLCK1oOnczr9f9Cps-yuARZi8NcRAuM/edit?usp=sharing/preview"
          title="Pamela Resume"
          style={{
            width: '100%',
            height: '60vh',
            border: 'none',
            borderRadius: '1rem',
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeModal;
