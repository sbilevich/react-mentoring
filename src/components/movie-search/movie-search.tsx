import { Search } from "../search/search";
import styles from './movie-search.module.scss'

export const MovieSearch = () => {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.text}>Find your movie</div>
      <Search />
    </div>
  );
};
