import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

import { useSettings } from "hooks";
import { Button, ButtonThemes, RadioGroup } from "atoms";

import style from './MiniProfile.module.scss';

interface MiniProfileProps {
  name: string;
  onSignOutClick(): void;
}

export function MiniProfile({
  name,
  onSignOutClick,
}: MiniProfileProps) {
  const navigate = useNavigate();
  const {
    language,
    unit,
    languageOptions,
    unitOptions,
    handleLanguageChange,
    handleUnitChange,
  } = useSettings();
  return (
    <div className={style.root}>
      <div
        className={style.displayName}
      >
        {name}
      </div>
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
      </div>
      <Divider style={{ marginTop: '1rem', marginBottom: '1rem' }} />
      <div className={style.settings}>
        <RadioGroup
          value={language}
          options={languageOptions}
          onChange={handleLanguageChange}
        />
        <RadioGroup
          value={unit}
          options={unitOptions}
          onChange={handleUnitChange}
        />
      </div>
      {/* <Divider style={{ marginTop: '1rem', marginBottom: '1rem' }} /> */}
      <Button
          noMargins
          fullWidth
          theme={ButtonThemes.GRADIENT_4}
          onClick={onSignOutClick}
        >
          Sign Out
        </Button>
    </div>
  )
}
