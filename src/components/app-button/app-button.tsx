import classNames from 'classnames';
import { FC } from 'react';
import styles from './app-button.module.scss';

interface AppButtonProps {
  text: string;
  className?: string;
  onButtonClick: () => void;
}

export const AppButton: FC<AppButtonProps> = ({
  text = 'ok',
  className,
  onButtonClick,
}) => (
  <button
    className={classNames(styles.button, className)}
    onClick={onButtonClick}
  >
    {text}
  </button>
);
