/* eslint-disable @typescript-eslint/ban-ts-comment */
import classNames from 'classnames';
import style from './Button.module.scss';
import { ReactNode } from 'react';
import { HiPlusCircle } from 'react-icons/hi';

export enum ButtonThemes {
  // @ts-expect-error
  PRIMARY = style.primary,
  // @ts-expect-error
  SECONDARY = style.secondary,
  // @ts-expect-error
  ADD = style.add,
  // @ts-expect-error
  TRANSPARENT = style.transparent,
  // @ts-expect-error
  GRADIENT_1 = style.gradient_1,
  // @ts-expect-error
  GRADIENT_2 = style.gradient_2,
  // @ts-expect-error
  GRADIENT_3 = style.gradient_3,
  // @ts-expect-error
  GRADIENT_4 = style.gradient_4,
}

interface IButtonProps {
  children?: string | ReactNode;
  theme?: ButtonThemes;
  disabled?: boolean;
  isAddButton?: boolean;
  className?: string;
  noMargins?: boolean;
  fullWidth?: boolean;
  onClick: () => void | Promise<void>;
}

export function Button({
  children,
  isAddButton = false,
  theme = ButtonThemes.SECONDARY,
  disabled = false,
  noMargins = false,
  fullWidth = false,
  className,
  onClick,
}: IButtonProps): JSX.Element {
  return (
    <button
      className={classNames([
        style.root,
        theme && theme,
        isAddButton && style.add,
        noMargins && style.noMargins,
        fullWidth && style.fullWidth,
        className && className,
      ])}
      disabled={disabled}
      onClick={onClick}
    >
      {children && children}
      {isAddButton && (
        <HiPlusCircle />
      )}
    </button>
  );
}
