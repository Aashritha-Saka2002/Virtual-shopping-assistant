import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // register logic
    navigate('/login'); // redirect to login after registering
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <input type="text" placeholder="Username" className="auth-input" required />
        <input type="email" placeholder="Email" className="auth-input" required />
        <input type="password" placeholder="Password" className="auth-input" required />
        <button className="auth-button" type="submit">Register</button>
      </form>
    </div>
  );
}
