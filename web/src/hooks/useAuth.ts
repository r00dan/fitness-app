import { useEffect, useState } from 'react';
import { type User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { nanoid } from 'nanoid';

import { auth } from '../main';
import { CreateUserDtoInput } from 'shared-types';
import { UserApi } from 'api';
import { Language, Unit, useLoader } from 'hooks';
import { useUser } from 'stores';

interface IUseAuth {
  token: string;
  currentUser: User | null;
  handleSignInClick(): Promise<void>;
  handleSignOutClick(): Promise<void>;
}

export function useAuth(): IUseAuth {
  const { updateUser } = useUser();
  const { turnOnLoader, turnOffLoader } = useLoader();
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  const [createUserApi] = UserApi.useCreateUserLazy();
  const [getUserInfo, { data: userData, loading }] = UserApi.useGetUserLazy();

  useEffect(() => {
    turnOnLoader();
    auth.onAuthStateChanged((data) => {
      getUserInfo({ params: `/${data?.uid}` });
      turnOffLoader();
      setUser(data);
    });
  }, []);

  useEffect(() => {
    if (!loading && userData) {
      const { customExercises, ...rest } = userData;
      updateUser(rest);
    }
  }, [loading]);

  const handleSignInClick = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const { user } = result;

    const { email, displayName, uid } = user;

    createUserApi<CreateUserDtoInput>({
      body: {
        id: uid ?? nanoid(),
        email: email!,
        displayName: displayName ?? '',
        preferedLanguage: Language.EN,
        preferedUnit: Unit.KG,
      },
    });

    token && setToken(token);
    user && setUser(user);
  };

  const handleSignOutClick = async (): Promise<void> => {
    await auth.signOut();
    setUser(null);
  }
  
  return {
    token,
    currentUser: user,
    handleSignInClick,
    handleSignOutClick,
  };
}
