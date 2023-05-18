import { Button } from 'atoms';
import { useAuth } from 'hooks';

import style from './Auth.module.scss';

export function Auth(): JSX.Element {
  const {
    currentUser,
    handleAvatarClick,
    handleSignInClick
  } = useAuth();

  return (
    <div className={style.root}>
      {currentUser
        ? (
          <div>
            {currentUser.photoURL
              ? (
                <img
                  className={style.avatar}
                  src={currentUser.photoURL}
                  alt='avatar'
                  onClick={handleAvatarClick}
                />
              )
              : (
                <div>
                  {currentUser.displayName}
                </div>
              )
            }
          </div>
        )
        : (
            <Button
              onClick={handleSignInClick}
            >
              SIGN IN
            </Button>
        )}
    </div>
  );
}
