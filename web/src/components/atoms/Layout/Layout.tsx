import type { ReactNode } from 'react';

import { Loader } from 'atoms';
import { Header } from 'molecules';
import { useLoader } from 'hooks';

import style from './Layout.module.scss';

interface ILayoutProps {
  withHeader?: boolean;
  children: ReactNode;
}

export function Layout({
  withHeader = true,
  children,
}: ILayoutProps): JSX.Element {
  const { loaderStatus } = useLoader();
  return (
    <div className={style.root}>
      {withHeader && (
        <Header />
      )}
      
      {loaderStatus ? (
        <Loader
          visible={loaderStatus}
        />
      ) : (
        children
      )}
    </div>
  )
}
