import { Radio, type RadioChangeEvent } from 'antd';

import { OptionType } from 'molecules';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

interface RadioGroupProps {
  options: OptionType[];
  value?: OptionType | string;
  onChange(e: RadioChangeEvent): void;
}

export function Component({
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <ThemeProvider>
      <Radio.Group
        value={value}
        options={options}
        onChange={onChange}
        optionType="button"
      />
    </ThemeProvider>
  )
}
