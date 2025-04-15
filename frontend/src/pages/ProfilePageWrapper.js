import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';  
import Profile from './pages/Profile';  // Import Profile component

function ProfilePageWrapper() {
  const { user } = useAuth();

  if (!user) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" />;
  }

  return <Profile />;  // Show Profile page if the user is authenticated
}

export default ProfilePageWrapper;
