import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import './styles/Auth.css'; 
import LearnMore from './pages/LearnMore';
import GetInTouch from './pages/GetInTouch';
import Profile from './pages/Profile'; 
import React, { useState } from 'react';

// ---------- Pages ----------

function Home() {
  return (
    <div style={heroContainer}>
      <div style={heroOverlay}>
        <h1 style={heroTitle}>Welcome to SmartShop</h1>
        <p style={heroSubtitle}>Where AI meets effortless shopping</p>
        <button style={heroButton} onClick={() => window.location.href = '/shop'}>
          Start Shopping
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={aboutContainer}>
      <div style={aboutSection}>
        <h1 style={aboutTitle}>About Us</h1>
        <p style={aboutText}>
          We’re a team of innovators building the next-gen virtual shopping experience.
        </p>
        {/* Learn More Button */}
        <NavLink to="/learn-more" style={aboutButton}>Learn More</NavLink>
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Sent:', formData);
    // Optionally add API call here
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };
  <div id="get-in-touch" style={sectionStyle}>
  <h1 style={contactTitle}>Get in Touch</h1>
  ...
</div>


  return (
    <div style={sectionStyle}>
      <h1 style={contacttitle}>Contact Us</h1>
        <p style={contactText}>
          copy @2025, support@shopeasy.com
        </p>
        <p style={contactText}>
          contact: +91 1234567891
        </p>
      <h1 style={contactTitle}>Get in Touch</h1>
      <p style={contactText}>Have questions or feedback? We'd love to hear from you.</p>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={textareaStyle}
        />
        <button type="submit" style={contactButton}>Send Message</button>
      </form>
    </div>
  );
}

function Cart() {
  return (
    <div style={sectionStyle}>
      <h1>Your Cart</h1>
      <p>Here’s what you’ve added to your cart. Continue shopping or proceed to checkout.</p>
    </div>
  );
}

// ---------- Main App ----------

export default function App() {
  return (
    <div style={containerStyle}>
      <Router>
        <nav style={navStyle}>
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeLinkStyle : {}),
              })}
            >
              {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
              {label}
            </NavLink>
          ))}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/profile" element={<Profiler />} />
        </Routes>
      </Router>
    </div>
  );
}

// ---------- Navigation ----------

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/shop', label: 'Shop' },
  { to: '/cart', label: 'Cart', icon: <FaShoppingCart style={{ marginRight: '5px' }} /> },
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' },
];

// ---------- Styles ----------

const containerStyle = {
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  minHeight: '100vh',
  backgroundColor: '#ecf0f1',
};

const navStyle = {
  backgroundColor: '#2c3e50',
  padding: '15px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '15px',
};

const linkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontWeight: '500',
  padding: '8px 12px',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'background 0.3s',
};

const activeLinkStyle = {
  backgroundColor: '#3498db',
};

// ---------- Hero Section ----------

const heroContainer = {
  height: '80vh',
  background: 'linear-gradient(45deg, #8e44ad, #3498db)', // Gradient from purple to blue
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
};

const heroOverlay = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker overlay
  padding: '40px',
  borderRadius: '12px',
};

const heroTitle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', // Subtle shadow to enhance readability
};

const heroSubtitle = {
  fontSize: '1.5rem',
  marginBottom: '30px',
  color: '#ecf0f1', // Soft light grey
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', // Shadow for contrast
};

const heroButton = {
  padding: '12px 28px',
  fontSize: '1rem',
  backgroundColor: '#f39c12', // Bright yellow-orange
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};

heroButton[':hover'] = {
  backgroundColor: '#e67e22', // Darker orange
  transform: 'scale(1.05)', // Interactive effect
};

// ---------- Generic Section Style ----------

const sectionStyle = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

// ---------- About Page Styles ---------- 

const aboutContainer = {
  backgroundColor: '#f4f6f7', // Soft light grey background
  padding: '50px 20px', // Spacious padding for a relaxed feel
};

const aboutSection = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '30px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const aboutTitle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#8e44ad', // Purple to keep consistency with Home page hero section
  marginBottom: '15px',
};

const aboutText = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  color: '#34495e', // Dark grey text for readability
  marginBottom: '20px',
};

const aboutButton = {
  padding: '12px 28px',
  fontSize: '1rem',
  backgroundColor: '#3498db', // Consistent blue from homepage to keep things cohesive
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};

aboutButton[':hover'] = {
  backgroundColor: '#2980b9', // Darker blue on hover
  transform: 'scale(1.05)', // Slight interactive effect for engagement
};

// ---------- Contact Page Styles ----------

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '30px',
  };
  
  const inputStyle = {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };
  
  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical'
  };
  
  const contactTitle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: '15px',
  };
  const contacttitle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '15px',
  };
  
  const contactText = {
    fontSize: '1.2rem',
    color: '#34495e',
  };
  
  const contactButton = {
    padding: '12px 28px',
    fontSize: '1rem',
    backgroundColor: 'green',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };
  
  contactButton[':hover'] = {
    backgroundColor: '#e67e22',
    transform: 'scale(1.05)',
  };
