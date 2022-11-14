import { Logo } from 'components/logo/logo';
import { useMovieContext } from 'contexts/movie-context';
import { FC } from 'react';
import { ReactComponent as Search } from 'assets/search.svg';
import styles from './movie-description.module.scss';

export const MovieDescription: FC = () => {
  const { selectedMovie, setSelectedMovie } = useMovieContext();

  return (
    <div className={styles.container}>
      <div className={styles.headerWpapper}>
        <Logo />
        <Search
          className={styles.search}
          onClick={() => setSelectedMovie(undefined)}
        />
      </div>
      <div className={styles.movieWrapper}>
        <img src={selectedMovie?.img} alt={selectedMovie?.title} />
        <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{selectedMovie?.title}</h2>
            <div className={styles.rating}>{selectedMovie?.rating}</div>
          </div>
          <span className={styles.shortDesc}>
            {selectedMovie?.shortDescription}
          </span>
          <div className={styles.yearWrapper}>
            <div className={styles.year}>{selectedMovie?.year}</div>
            <div>{selectedMovie?.duration}</div>
          </div>
          <p className={styles.description}>{selectedMovie?.description}</p>
        </div>
      </div>
    </div>
  );
};
