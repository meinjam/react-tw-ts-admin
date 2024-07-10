// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../utils/interfaces';
import { axiosInstance } from '../lib/axios';

interface AuthContextType {
  token: string | undefined;
  user: UserType | undefined;
  loggedIn: (token: string | undefined, user: UserType | undefined) => void;
  afterLoggedIn: (token: string | undefined, user: UserType | undefined) => void;
  loggedOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<UserType | undefined>(undefined);
  const navigate = useNavigate();

  const loggedIn = (token: string | undefined, user: UserType | undefined) => {
    setToken(token);
    setUser(user);
  };

  const afterLoggedIn = (token: string | undefined, user: UserType | undefined) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const storeLocalStorage = { token, user };
    localStorage.setItem('auth', JSON.stringify(storeLocalStorage));
    navigate('/');
  };

  const loggedOut = () => {
    setToken(undefined);
    setUser(undefined);
    localStorage.removeItem('auth');
    navigate('/');
  };

  const value = { token, user, loggedIn, loggedOut, afterLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
