import { CgGym } from 'react-icons/cg';
import classNames from 'classnames';

import style from './Loader.module.scss';

interface LoaderProps {
  visible: boolean;
}

export function Loader({
  visible,
}: LoaderProps) {
  return (
    <div className={classNames([
      style.root,
      visible ? style.fadein : style.fadeout,
    ])}>
      <div className={style.icon}>
        <CgGym />
      </div>
    </div>
  )
}
