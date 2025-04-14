import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div style={contactContainer}>
      <div style={contactSection}>
        <h1 style={contactTitle}>Contact Us</h1>
        <p style={contactText}>We would love to hear from you!</p>
        <p style={contactDetails}>Email: support@shopping.com | Phone: +91 1234567891</p>

        <NavLink to="/contact#get-in-touch" style={contactButton}>
          Get in Touch
        </NavLink>
      </div>

      {/* Contact Form Section (scroll target) */}
      <div id="get-in-touch" style={{ marginTop: '60px' }}>
        <h2 style={contactTitle}>Get in Touch</h2>
        <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="email" placeholder="Your Email" required style={inputStyle} />
          <textarea placeholder="Your Message" required style={textareaStyle}></textarea>
          <button type="submit" style={submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

// ---------- Styles ----------
const contactContainer = {
  backgroundColor: '#ecf0f1',
  padding: '50px 20px',
};

const contactSection = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '30px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const contactTitle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#3498db',
  marginBottom: '15px',
};

const contactText = {
  fontSize: '1.2rem',
  color: '#34495e',
  marginBottom: '10px',
};

const contactDetails = {
  fontSize: '1.1rem',
  color: '#2c3e50',
  marginBottom: '25px',
};

const contactButton = {
  padding: '12px 28px',
  fontSize: '1rem',
  backgroundColor: '#f39c12',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px',
};

const inputStyle = {
  padding: '12px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  padding: '12px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  minHeight: '120px',
};

const submitButton = {
  padding: '12px 28px',
  fontSize: '1rem',
  backgroundColor: '#3498db',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};
