import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(data.message || 'Reset failed');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="auth-button" type="submit">Reset</button>
        {message && <p className="auth-success">{message}</p>}
        {error && <p className="auth-error">{error}</p>}
      </form>
    </div>
  );
}
