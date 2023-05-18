import type { ReactNode } from 'react';

import { Header } from 'atoms';

import style from './Layout.module.scss';

interface ILayoutProps {
  withHeader?: boolean;
  children: ReactNode;
}

export function Layout({
  withHeader = true,
  children,
}: ILayoutProps): JSX.Element {
  return (
    <div className={style.root}>
      {withHeader && (
        <Header />
      )}
      {children}
    </div>
  )
}
