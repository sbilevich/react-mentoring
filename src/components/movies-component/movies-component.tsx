import { MoviesContainer } from 'components/movies-container/movies-container';
import { useParams } from 'react-router-dom';

import styles from './movies-component.module.scss';

export const MoviesComponent = () => {
  return (
    <>
      <div className={styles.divider} />
      <MoviesContainer />
    </>
  );
};
