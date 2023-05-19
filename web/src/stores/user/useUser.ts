import { useRecoilState } from 'recoil';

import { UserStore, userStore } from './user.store';
import { UserApi } from 'api';

export function useUser() {
  const [updateUserApi] = UserApi.useUpdateUserLazy();
  const [user, setUser] = useRecoilState(userStore);

  const updateUser = (userInput: UserStore) => {
    setUser((prevState) => ({ ...prevState, ...userInput }));
    if (user.id) {
      updateUserApi({ body: { ...userInput, id: user.id } });
    }
  };
  const resetUser = () => updateUser({});

  return {
    user,
    updateUser,
    resetUser,
  };
}
