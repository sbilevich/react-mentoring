import { DeleteMovie } from 'components/delete-movie/delete-movie';
import { EditMovie } from 'components/edit-movie/edit-movie';
import { FC, useState } from 'react';
import styles from './movie-card.module.scss';

interface MovieCardProps {
  img: string;
  title: string;
  year: number;
  description: string;
}

export const MovieCard: FC<MovieCardProps> = ({
  img,
  title,
  year,
  description,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleEdit = () => {
    setShowEditModal(true);
    closeMenu();
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
    closeMenu();
  };

  const handleCloseEdit = () => {
    setShowEditModal(false);
  };
  const handleCloseDelete = () => {
    setShowEditModal(false);
  };

  return (
    <div className={styles.card}>
      <img src={img} alt={`${title}-poster`} className={styles.img} />
      <div className={styles.descriptionWrappper}>
        <div className={styles.nameWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.year}>{year}</div>
        </div>
        <div className={styles.description}>{description}</div>
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
          <div className={styles.closeMenu} onClick={closeMenu}>
            x
          </div>
          <div className={styles.menuItem} onClick={handleEdit}>
            Edit
          </div>
          <div className={styles.menuItem} onClick={handleDelete}>
            Delete
          </div>
        </div>
      )}
      {showEditModal && (
        <EditMovie title="Edit Movie" onSubmit={handleCloseEdit} />
      )}
      {showDeleteModal && (
        <DeleteMovie
          onDelete={handleCloseDelete}
          onCancel={handleCloseDelete}
        />
      )}
    </div>
  );
};
