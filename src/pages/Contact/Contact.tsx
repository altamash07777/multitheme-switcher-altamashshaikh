import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <aside className={styles.sidebar}>Sidebar: Sidebar with Dark Theme</aside>

      <div className={styles.pageContent}>
        <h1>Contact Us</h1>
        <p>If you have any questions, feedback, or just want to say hello, feel free to reach out!</p>

        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message here..." rows={5} />

          <button type="submit" className="theme-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
