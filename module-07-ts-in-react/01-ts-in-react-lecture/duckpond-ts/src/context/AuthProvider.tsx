import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from '.';
import { me } from '../data';
import type { AuthContextType, User } from '../types';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [checkSession, setCheckSession] = useState(true);

  const handleSignIn = (token: string) => {
    localStorage.setItem('token', token);
    setSignedIn(true);
    setCheckSession(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setSignedIn(false);
    setUser(null);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await me();

        setUser(data);
        setSignedIn(true);
      } catch (error) {
        console.error(error);
      } finally {
        setCheckSession(false);
      }
    };

    if (checkSession) getUser();
  }, [checkSession]);

  const values: AuthContextType = {
    signedIn,
    user,
    handleSignIn,
    handleSignOut,
  };

  return <AuthContext value={values}>{children}</AuthContext>;
};

export default AuthProvider;
