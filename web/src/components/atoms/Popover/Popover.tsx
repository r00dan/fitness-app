import { Popover } from 'antd';

import { ThemeProvider } from 'atoms';
import { ReactNode } from 'react';

interface PopoverProps {
  content: ReactNode;
  children: ReactNode;
  title?: ReactNode;
}

export function Component({
  content,
  children,
  title,
}: PopoverProps) {
  return (
    <ThemeProvider>
      <Popover
        trigger="click"
        placement="bottomRight"
        title={title}
        content={content}
      >
        {children}
      </Popover>
    </ThemeProvider>
  )
}
