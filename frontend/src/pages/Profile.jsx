import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';  // Assuming you have AuthContext

export default function Profile() {
  const { user, updateUser } = useAuth(); // Assuming you have an updateUser function in AuthContext
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateUser(formData); // Assuming updateUser will handle updating the user data
    setEditMode(false);
  };

  return (
    <div style={profileContainer}>
      <h1 style={profileTitle}>Profile</h1>

      {user ? (
        <div>
          <p style={profileText}>Welcome, {user.username}</p>
          <p style={profileText}>Email: {user.email}</p>
          
          {editMode ? (
            <form onSubmit={handleSave} style={formStyle}>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <button type="submit" style={saveButton}>Save</button>
            </form>
          ) : (
            <button onClick={() => setEditMode(true)} style={editButton}>Edit</button>
          )}
        </div>
      ) : (
        <p style={profileText}>Please log in to view your profile.</p>
      )}
    </div>
  );
}

// ---------- Styles ----------
const profileContainer = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const profileTitle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#3498db',
  marginBottom: '20px',
};

const profileText = {
  fontSize: '1.2rem',
  color: '#34495e',
  marginBottom: '20px',
};

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

const saveButton = {
  padding: '12px 28px',
  fontSize: '1rem',
  backgroundColor: '#f39c12',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
};

const editButton = {
  padding: '12px 28px',
  fontSize: '1rem',
  backgroundColor: '#3498db',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
};
