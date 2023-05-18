import { InputNumber } from "antd";
import { ThemeProvider } from "atoms";

interface InputNumberProps {
  value: number;
  disabled?: boolean;
  defaultValue?: number;
  min?: number;
  max?: number;
  after?: string;
  before?: string;
  onChange(value: number | null): void;
}

export function Component({
  value,
  disabled = false,
  defaultValue = 0,
  after,
  before,
  min = 0,
  max = 100,
  onChange,
}: InputNumberProps) {
  return (
    <div>
      <ThemeProvider>
        <InputNumber
          disabled={disabled}
          min={min}
          max={max}
          defaultValue={defaultValue}
          value={value}
          addonAfter={after}
          addonBefore={before}
          onChange={onChange}
        />
      </ThemeProvider>
    </div>
  )
}
