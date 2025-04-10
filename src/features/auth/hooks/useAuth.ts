import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const { user, login, logout } = useAuthStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
