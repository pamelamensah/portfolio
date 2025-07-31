'use client';

import React, { useEffect, useState } from 'react';

const SparkleOverlay = () => {
  const [sparkles, setSparkles] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => {
        const id = Math.random();
        setTimeout(() => {
          setSparkles((current) => current.filter((s) => s !== id));
        }, 1000);
        return [...prev, id];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      pointerEvents: 'none',
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      zIndex: 999,
      overflow: 'hidden'
    }}>
      {sparkles.map((id) => (
        <span
          key={id}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '8px',
            height: '8px',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(255,255,255,0.8)',
            animation: 'twinkle 1s ease-out forwards',
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
};

export default SparkleOverlay;
