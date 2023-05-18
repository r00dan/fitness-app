import { useNavigate } from 'react-router-dom';
import style from './ErrorPage.module.scss';
import { Link } from 'atoms';

export function ErrorPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className={style.root}>
      <div className={style.title}>Error 404</div>
      <div>Back to <Link to={'/'}>Home page</Link></div>
    </div>
  );
}
