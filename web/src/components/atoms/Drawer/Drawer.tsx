import { CSSProperties, ReactNode } from 'react';
import { Drawer } from 'antd';

import style from './Drawer.module.scss';
import { ThemeProvider } from 'atoms';

export const enum Placement {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

interface IDrawerProps {
  isOpen: boolean;
  children: ReactNode;
  placement?: Placement;
  title?: string;
  onClose(): void;
}

const maskStyles: CSSProperties = {
  backdropFilter: 'blur(4px)',
}

export function Component({
  isOpen,
  children,
  title,
  placement = Placement.RIGHT,
  onClose,
}: IDrawerProps) {
  return (
    <ThemeProvider>
      <Drawer
        closable
        destroyOnClose
        maskClosable
        width={600}
        title={title}
        className={style.root}
        placement={placement}
        onClose={onClose}
        open={isOpen}
        maskStyle={maskStyles}
      >
        {children}
      </Drawer>
    </ThemeProvider>
  )
}
