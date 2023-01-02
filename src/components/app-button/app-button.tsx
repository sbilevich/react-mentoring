import classNames from 'classnames';
import { FC } from 'react';
import styles from './app-button.module.scss';

interface AppButtonProps {
  text: string;
  className?: string;
  onButtonClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const AppButton: FC<AppButtonProps> = ({
  text = 'ok',
  className,
  onButtonClick,
  type = 'button',
}) => (
  <button
    className={classNames(styles.button, className)}
    onClick={onButtonClick}
    type={type}
  >
    {text}
  </button>
);
