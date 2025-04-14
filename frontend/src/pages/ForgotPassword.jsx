import { useState } from 'react';
import '../styles/Auth.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setError('');
      } else {
        setError(data.message || 'Failed to send reset email');
        setMessage('');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="auth-button" type="submit">Send Reset Link</button>
        {message && <p className="auth-success">{message}</p>}
        {error && <p className="auth-error">{error}</p>}
      </form>
    </div>
  );
}
