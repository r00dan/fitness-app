import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../main';

interface IUseAuth {
  token: string;
  currentUser: User | null;
  handleSignInClick: () => Promise<void>;
  handleAvatarClick: () => void;
  handleSignOutClick: () => Promise<void>;
}

export function useAuth(): IUseAuth {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const handleSignInClick = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const { user } = result;

    token && setToken(token);
    user && setUser(user);
  };

  const handleSignOutClick = async (): Promise<void> => {
    await auth.signOut();

    setUser(null);
  }

  const handleAvatarClick = (): void => {
    navigate('/profile');
  }
  
  return {
    token,
    currentUser: user,
    handleSignInClick,
    handleAvatarClick,
    handleSignOutClick,
  };
}
