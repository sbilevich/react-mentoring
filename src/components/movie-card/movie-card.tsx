import { DeleteMovie } from 'components/delete-movie/delete-movie';
import { Actions, EditMovie } from 'components/edit-movie/edit-movie';
import { FC, useMemo, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { deleteMovieAction } from 'redux/movies';
import { Movie } from 'types/movie';

import styles from './movie-card.module.scss';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export const MovieCard: FC<MovieCardProps> = ({ movie, onClick }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();

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

  const handleDelete = () => {
    dispatch(deleteMovieAction(movie.id));
  };

  const year = useMemo(
    () => new Date(movie.release_date).getFullYear(),
    [movie.release_date],
  );

  return (
    <div className={styles.card} onClick={() => onClick(movie)}>
      <img
        src={movie.poster_path}
        alt={`${movie.title}-poster`}
        className={styles.img}
      />
      <div className={styles.descriptionWrappper}>
        <div className={styles.nameWrapper}>
          <span className={styles.title}>{movie.title}</span>
          <span className={styles.year}>{year}</span>
        </div>
        <p className={styles.description}>{movie.tagline}</p>
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
      {showEditModal && (
        <EditMovie
          title="Edit Movie"
          onClose={closeEdit}
          movie={movie}
          action={Actions.Edit}
        />
      )}
      {showDeleteModal && (
        <DeleteMovie onDelete={handleDelete} onCancel={closeDelete} />
      )}
    </div>
  );
};
