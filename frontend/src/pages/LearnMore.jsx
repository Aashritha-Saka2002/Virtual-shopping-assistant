import React from 'react';

const sectionStyle = {
  maxWidth: '900px',
  margin: '50px auto',
  padding: '40px',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  lineHeight: '1.7',
  color: '#2c3e50',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#8e44ad',
  marginBottom: '20px',
  textAlign: 'center',
};

const subheadingStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  marginTop: '30px',
  color: '#34495e',
};

const paragraphStyle = {
  marginTop: '10px',
  fontSize: '1.1rem',
};

export default function LearnMore() {
  return (
    <div style={sectionStyle}>
      <h1 style={titleStyle}>Learn More About SmartShop</h1>

      <h2 style={subheadingStyle}>🚀 Our Vision</h2>
      <p style={paragraphStyle}>
        At SmartShop, we're redefining the shopping experience with the power of AI. Our goal is to
        make every online interaction smooth, smart, and satisfying—whether you're browsing, comparing,
        or buying.
      </p>

      <h2 style={subheadingStyle}>🤖 Powered by AI</h2>
      <p style={paragraphStyle}>
        Our intelligent assistant helps you search, ask questions, and get instant product
        recommendations using cutting-edge language models. With both voice and text interaction,
        SmartShop adapts to your shopping style—just like a real assistant would.
      </p>

      <h2 style={subheadingStyle}>💡 Innovation Meets Simplicity</h2>
      <p style={paragraphStyle}>
        From intuitive navigation to personalized suggestions, we’ve designed SmartShop to be fast,
        responsive, and fun. Say goodbye to overwhelming product pages—everything you need is a
        conversation away.
      </p>

      <h2 style={subheadingStyle}>👩‍💻 Meet the Team</h2>
      <p style={paragraphStyle}>
        We’re a passionate group of developers, designers, and AI enthusiasts who believe in smarter
        solutions for everyday problems. Our mission is to blend technology and usability to make
        online shopping better for everyone.
      </p>

      <h2 style={subheadingStyle}>✨ What’s Next?</h2>
      <p style={paragraphStyle}>
        We’re continuously evolving—adding features like real-time product tracking, multilingual
        support, and smarter price comparisons. Stay tuned as we push the limits of what's possible
        in eCommerce.
      </p>
    </div>
  );
}
