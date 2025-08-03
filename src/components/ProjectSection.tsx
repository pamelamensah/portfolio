'use client';

import React, { useEffect } from 'react';
import styles from './ProjectSection.module.css';

const projects = [
  {
    title: 'Prism Calendar',
    description: 'A mood-aware calendar that adapts to your energy and emotions.',
    image: '/prism.png',
    link: 'https://prism-eosin-psi.vercel.app/',
  },
  {
    title: 'Kudos Board',
    description: 'A platform for employees to share positive feedback with each other.',
    image: '/kudos-board.png',
    link: 'https://kudos-board3.onrender.com/',
  },
  {
    title: 'Masquerader',
    description: 'An immersive murder mystery game where you navigate through shadows and deception.',
    image: '/masquerader.png',
    link: '/masquerader',
  },
  {
    title: 'Flixster',
    description: 'A movie recommendation app that uses the TMDB API.',
    image: '/flixster.png',
    link: 'https://remarkable-fudge-1022a5.netlify.app/',
  },
];

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      {/* ✨ This is the new inner container */}
      <div className={styles.projectWrapper}>
        <h2 className={styles.projectTitle}>🌟 Featured Projects</h2>
        <div className={styles.projectCards}>
          {projects.map((project, index) => (
            project.link ? (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectCard}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h3>
                  🌟 <strong>{project.title}</strong>
                </h3>
                <p>{project.description}</p>
              </a>
            ) : (
              <div key={index} className={styles.projectCard}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h3>
                  🌟 <strong>{project.title}</strong>
                </h3>
                <p>{project.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
