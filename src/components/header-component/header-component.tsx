import { HeaderTop } from "components/header-top/header-top";
import { MovieCard } from "components/movie-card/movie-card";
import { MovieSearch } from "components/movie-search/movie-search";

import styles from './header-component.module.scss'

export const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <HeaderTop />
      <MovieSearch />
      
    </div>
  );
};
