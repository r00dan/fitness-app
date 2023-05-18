import { Layout } from 'atoms';

import style from './HomePgae.module.scss';

export function HomePage(): JSX.Element {
  return (
    <Layout>
      <div className={style.root}>
        Add custom exercises, manage workout history and blah-blah-blah
      </div>
    </Layout>
  );
}

