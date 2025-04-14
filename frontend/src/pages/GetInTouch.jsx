// src/pages/GetInTouch.jsx
import React from 'react';

const GetInTouch = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Get in Touch</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" required style={styles.input} />
        <input type="email" placeholder="Your Email" required style={styles.input} />
        <textarea placeholder="Your Message" required style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    background: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    minHeight: '150px',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default GetInTouch;
