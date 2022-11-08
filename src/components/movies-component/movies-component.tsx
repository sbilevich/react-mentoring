import { MoviesContainer } from 'components/movies-container/movies-container';

import styles from './movies-component.module.scss';

export const MoviesComponent = () => (
  <>
    <div className={styles.divider} />
    <MoviesContainer />
  </>
);
