import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Store token and user data if provided
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Navigate based on role (optional)
        if (data.user.role === 'admin') {
          navigate('/admin'); // or your admin dashboard route
        } else {
          navigate('/shop');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <h2 className="a">Login</h2>
      <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="auth-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth-input"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="auth-button" type="submit">Login</button>
        {error && <p className="auth-error">{error}</p>}
        <p className="auth-link" onClick={() => navigate('/forgot-password')}>
          Forgot Password?
        </p>
      </form>
    </div>
    </div>
  );
}
