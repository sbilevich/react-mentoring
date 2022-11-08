import { AppButton } from 'components/app-button/app-button';
import { Modal } from 'components/modal/modal';
import styles from './delete-movie.module.scss';

interface Props {
  onDelete: () => void;
  onCancel: () => void;
}

export const DeleteMovie = ({ onDelete, onCancel }: Props) => {
  const handleDelete = () => {
    onDelete();
    console.log('deleted');
  };
  const handleReset = () => {
    onCancel();
  };

  return (
    <Modal onClose={handleReset}>
      <div className={styles.content}>
        <div className={styles.title}>Delete Movie</div>
        <div className={styles.text}>
          Are you sure you want to delete this movie?
        </div>
        <div className={styles.buttons}>
          <AppButton text="Confirm" onButtonClick={handleDelete} />
        </div>
      </div>
    </Modal>
  );
};
