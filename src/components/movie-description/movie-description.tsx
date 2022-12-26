import { Logo } from 'components/logo/logo';
import { FC, useMemo } from 'react';
import { ReactComponent as Search } from 'assets/search.svg';
import styles from './movie-description.module.scss';
import { Movie } from 'types/movie';
import { useAppDispatch } from 'redux/hooks';
import { select } from 'redux/movies';

interface Props {
  movie: Movie;
}

export const MovieDescription: FC<Props> = ({ movie }) => {
  const dispatch = useAppDispatch();

  const year = useMemo(
    () => new Date(movie.release_date).getFullYear(),
    [movie.release_date],
  );

  return (
    <div className={styles.container}>
      <div className={styles.headerWpapper}>
        <Logo />
        <Search
          className={styles.search}
          onClick={() => dispatch(select(undefined))}
        />
      </div>
      <div className={styles.movieWrapper}>
        <img className={styles.img} src={movie.poster_path} alt={movie.title} />
        <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{movie.title}</h2>
            <span className={styles.rating}>{movie.vote_average}</span>
          </div>
          <span className={styles.shortDesc}>{movie?.tagline}</span>
          <div className={styles.yearWrapper}>
            <span className={styles.year}>{year}</span>
            <span>{movie.runtime}</span>
          </div>
          <p className={styles.description}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
