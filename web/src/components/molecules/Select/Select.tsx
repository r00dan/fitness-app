// import Select, { SingleValue, StylesConfig } from 'react-select';
import { Select } from 'antd';
import classnames from 'classnames';

import { ThemeProvider } from 'atoms';

import style from './Select.module.scss';

export type OptionType<T = string> = { label: string, value: T, disabled?: boolean };

interface ISelectProps {
  options: OptionType[];
  value?: OptionType;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  onChange(value: OptionType<string>, option: OptionType<string> | OptionType<string>[]): void;
}

export function CustomSelect({
  options,
  value,
  placeholder,
  className,
  disabled,
  clearable,
  onChange,
}: ISelectProps) {
  return (
    <ThemeProvider>
      <Select
        className={classnames([
          style.root,
          className && className,
        ])}
        disabled={disabled}
        allowClear={clearable}
        value={value}
        options={options}
        defaultValue={{ label: '---', value: '' }}
        placeholder={placeholder}
        onChange={onChange}
      />
    </ThemeProvider>
  )
}
