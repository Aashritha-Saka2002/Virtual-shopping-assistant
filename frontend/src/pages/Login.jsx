import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic
    navigate('/shop'); // go to shop after login
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" className="auth-input" required />
        <input type="password" placeholder="Password" className="auth-input" required />
        <button className="auth-button" type="submit">Login</button>
      </form>
    </div>
  );
}
