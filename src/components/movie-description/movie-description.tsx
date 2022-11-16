import { Logo } from 'components/logo/logo';
import { Movie, useMovieContext } from 'contexts/movie-context';
import { FC } from 'react';
import { ReactComponent as Search } from 'assets/search.svg';
import styles from './movie-description.module.scss';

interface Props {
  movie: Movie;
  onClick: (movie: Movie | undefined) => void;
}

export const MovieDescription: FC<Props> = ({ movie, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWpapper}>
        <Logo />
        <Search className={styles.search} onClick={() => onClick(undefined)} />
      </div>
      <div className={styles.movieWrapper}>
        <img src={movie.img} alt={movie.title} />
        <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{movie.title}</h2>
            <span className={styles.rating}>{movie.rating}</span>
          </div>
          <span className={styles.shortDesc}>{movie?.shortDescription}</span>
          <div className={styles.yearWrapper}>
            <span className={styles.year}>{movie.year}</span>
            <span>{movie.duration}</span>
          </div>
          <p className={styles.description}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};
