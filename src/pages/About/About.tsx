import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <aside className={styles.sidebar}>Sidebar: Sidebar with Dark Theme</aside>

      <div className={styles.pageContent}>
        <h1>About Us</h1>
        <p>We are a creative team focused on building theme-based apps that are beautiful, fast, and user-friendly.</p>

        <h3>👩‍💻 Our Mission</h3>
        <p>To deliver clean, responsive, and customizable frontend experiences using modern technologies like React and TypeScript.</p>

        <h3>🚀 What We Do</h3>
        <ul>
          <li>Build modern web applications</li>
          <li>Design theme switchers and UI systems</li>
          <li>Follow responsive and accessible design</li>
        </ul>

        <h3>🌐 Technologies</h3>
        <p>React, TypeScript, Styled-Components, CSS Modules, Context API, and more.</p>

        <button className="theme-button">Learn More</button>
      </div>
    </div>
  );
};

export default About;
