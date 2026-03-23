import { createContext, useEffect, useMemo, useState } from 'react';
import { authApi } from '../api/api';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const bootstrap = async () => {
    try {
      const { data } = await authApi.me();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bootstrap();
  }, []);

  const login = async (payload) => {
    const { data } = await authApi.login(payload);
    localStorage.setItem('token', data.token);
    setUser(data.user);
    return data;
  };

  const register = async (payload) => authApi.register(payload);

  const logout = async () => {
    await authApi.logout();
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      register,
      logout
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
