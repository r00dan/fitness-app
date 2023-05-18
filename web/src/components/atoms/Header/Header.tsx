import { useNavigate } from 'react-router-dom';

import { Auth } from 'atoms';

import style from './Header.module.scss';

export function Header(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className={style.root}>
      <div
        className={style.logo}
        onClick={() => navigate('/')}
      >
        WORKOUT
      </div>
      <Auth />
    </div>
  );
}
