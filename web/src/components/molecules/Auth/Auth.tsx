import { Button, Popover } from 'atoms';
import { useAuth } from 'hooks';

import style from './Auth.module.scss';
import { MiniProfile } from '../MiniProfile/MiniProfile';

export function Auth(): JSX.Element {
  const {
    currentUser,
    handleSignInClick,
    handleSignOutClick,
  } = useAuth();

  return (
    <div className={style.root}>
      {currentUser
        ? (
          <Popover
            content={
              <MiniProfile
                name={currentUser.displayName!}
                onSignOutClick={handleSignOutClick}
              />
            }
          >
            <img
              className={style.avatar}
              src={currentUser.photoURL!}
              alt='avatar'
            />
          </Popover>
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
