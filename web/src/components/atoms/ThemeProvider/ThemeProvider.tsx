// Should use it only for ANTD components 

import { ReactNode } from "react";
import { ConfigProvider, ThemeConfig } from "antd";

interface ThemeProviderProps {
  children: ReactNode;
}

const darkTheme: ThemeConfig = {
  token: {
    colorPrimaryBg: '#333',
    colorBgContainer: '#333',
    colorBgElevated: '#333',
    colorText: '#fff',
    colorTextBase: '#fff',
    colorPrimary: '#FF3CAC'
  }
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ConfigProvider
      theme={darkTheme}
    >
      {children}
    </ConfigProvider>
  )
}
