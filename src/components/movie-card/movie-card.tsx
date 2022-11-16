import { DeleteMovie } from 'components/delete-movie/delete-movie';
import { EditMovie } from 'components/edit-movie/edit-movie';
import { FC, useState } from 'react';
import styles from './movie-card.module.scss';

interface MovieCardProps {
  img: string;
  title: string;
  year: number;
  shortDescription: string;
  onClick: () => void;
}

export const MovieCard: FC<MovieCardProps> = ({
  img,
  title,
  year,
  shortDescription,
  onClick,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const openEdit = () => {
    setShowEditModal(true);
    closeMenu();
  };

  const openDelete = () => {
    setShowDeleteModal(true);
    closeMenu();
  };

  const closeEdit = () => {
    setShowEditModal(false);
  };

  const closeDelete = () => {
    setShowEditModal(false);
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={img} alt={`${title}-poster`} className={styles.img} />
      <div className={styles.descriptionWrappper}>
        <div className={styles.nameWrapper}>
          <span className={styles.title}>{title}</span>
          <span className={styles.year}>{year}</span>
        </div>
        <p className={styles.description}>{shortDescription}</p>
      </div>
      <div
        className={styles.contextMenu}
        onClick={() => setShowMenu(true)}
        role="button"
      >
        <div className={styles.dotsContainer}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </div>
      {showMenu && (
        <div className={styles.menu}>
          <button className={styles.closeMenu} onClick={closeMenu}>
            x
          </button>
          <button className={styles.menuItem} onClick={openEdit}>
            Edit
          </button>
          <button className={styles.menuItem} onClick={openDelete}>
            Delete
          </button>
        </div>
      )}
      {showEditModal && <EditMovie title="Edit Movie" onClose={closeEdit} />}
      {showDeleteModal && (
        <DeleteMovie onDelete={closeDelete} onCancel={closeDelete} />
      )}
    </div>
  );
};
