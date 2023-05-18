import { Divider } from "antd";

import { Button, ButtonThemes } from "atoms";

import style from './MiniProfile.module.scss';
import { useNavigate } from "react-router-dom";

interface MiniProfileProps {
  name: string;
  onSignOutClick(): void;
}

export function MiniProfile({
  name,
  onSignOutClick,
}: MiniProfileProps) {
  const navigate = useNavigate();
  return (
    <div className={style.root}>
      <div
        className={style.displayName}
      >
        {name}
      </div>
      <Divider style={{ marginTop: '.5rem', marginBottom: '1rem' }} />
      <div className={style.menuList}>
        <Button
          noMargins
          fullWidth
          theme={ButtonThemes.TRANSPARENT}
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </Button>
        <Button
          noMargins
          fullWidth
          theme={ButtonThemes.TRANSPARENT}
          onClick={() => navigate('/schedule')}
        >
          Schedule
        </Button>
        <Button
          noMargins
          fullWidth
          theme={ButtonThemes.TRANSPARENT}
          onClick={() => navigate('/settings')}
        >
          Settings
        </Button>
        <Button
          noMargins
          fullWidth
          theme={ButtonThemes.GRADIENT_4}
          onClick={onSignOutClick}
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}
