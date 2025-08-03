'use client';

import React from 'react';
import Link from 'next/link';
import styles from './masquerader.module.css';

const MasqueraderPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.backButton}>
          ← Back to Portfolio
        </Link>
        
        <h1 className={styles.title}>🎭 Masquerader</h1>
        <p className={styles.subtitle}>
          An immersive stealth game where you navigate through shadows and deception
        </p>
        
        <div className={styles.videoSection}>
          <h2>Preview</h2>
          <div className={styles.videoContainer}>
            <video
              controls
              preload="metadata"
              className={styles.video}
              poster="/masquerader.png"
              onError={(e) => console.error('Video error:', e)}
            >
              <source src="/preview.mp4" type="video/mp4" />
              <source src="/preview.mov" type="video/quicktime" />
              <source src="/preview.webm" type="video/webm" />
              <p>Your browser doesn't support HTML5 video. 
                <a href="/preview.mp4" download>Download the video</a> to watch it.
              </p>
            </video>
            <div className={styles.videoFallback}>
              <p>If the video doesn't play, you can <a href="/preview.mov" download>download the preview video</a> to watch it.</p>
            </div>
          </div>
        </div>
          
          <div className={styles.howToPlaySection}>
            <h3>How to Play</h3>
            <div className={styles.instructionsCard}>
              <ol>
                <li>Download the Masquerader.zip file below</li>
                <li>Extract the ZIP file (double-click to unzip)</li>
                <li>Double-click Play_Masquerader_Mac.command to run</li>
                <li>If you get a warning about the file being damaged, right click on the file and select "Open"</li>
                <li>Enjoy the game!</li>
                <li>System Requirements: macOS 10.10+ with Java 8+ (usually pre-installed)</li>
              </ol>
            </div>
          </div>
          <a 
            href= "Masquerader.zip" 
            download
            className={styles.downloadButton}
          >
            Download Masquerader
          </a>
        </div>    
        </div>
  );
};

export default MasqueraderPage; 