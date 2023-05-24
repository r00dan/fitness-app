import { useRecoilState } from 'recoil';

import { UserApi } from 'api';
import { UserDataType } from 'shared-types';
import { userStore } from './user.store';

export function useUser() {
  const [updateUserApi] = UserApi.useUpdateUserLazy();
  const [user, setUser] = useRecoilState(userStore);

  const updateUser = (userInput: Partial<UserDataType>) => {
    if (user) {
      setUser((prevState) => ({ ...prevState, ...userInput }));
      if (user.id) {
        updateUserApi({ body: { ...userInput, id: user.id } });
      }
    }
  };

  return {
    user,
    updateUser,
  };
}
