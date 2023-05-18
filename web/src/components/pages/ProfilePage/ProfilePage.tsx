/* eslint-disable @typescript-eslint/no-empty-function */
import { Button, ButtonThemes, Layout } from 'atoms';
import { useAuth } from 'hooks';

import style from './ProfilePage.module.scss';

export function ProfilePage(): JSX.Element {
  const { handleSignOutClick } = useAuth();
  return (
    <Layout>
      <div className={style.root}>
        <div className={style.buttons}>
          <Button
            theme={ButtonThemes.GRADIENT_4}
            onClick={handleSignOutClick}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </Layout>
  );
}
