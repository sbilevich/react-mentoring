import { Search } from '../search/search';
import styles from './movie-search.module.scss';

export const MovieSearch = () => {
  return (
    <div className={styles.searchWrapper}>
      <h1 className={styles.text}>Find your movie</h1>
      <Search />
    </div>
  );
};
