// import Select, { SingleValue, StylesConfig } from 'react-select';
import { Select } from 'antd';
import classnames from 'classnames';

import { ThemeProvider } from 'atoms';

import style from './Select.module.scss';

export type OptionType<T = string> = { label: string, value: T, disabled?: boolean };

interface ISelectProps {
  options: OptionType[];
  value?: OptionType;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  onChange(value: OptionType<string>, option: OptionType<string> | OptionType<string>[]): void;
}

export function CustomSelect({
  options,
  value,
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
        defaultValue={options[0]}
        onChange={onChange}
      />
    </ThemeProvider>
  )
}
