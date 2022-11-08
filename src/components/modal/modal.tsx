import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { ReactNode } from 'react';
import styles from './modal.module.scss';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: Props) => {
  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <button className={styles.close} onClick={onClose}>
          <CloseIcon />
        </button>
        <div className={styles.wrapper}>{children}</div>
      </form>
    </div>
  );
};
