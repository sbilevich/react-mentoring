import { ErrorBoundary } from "components/error-boundary/error-boundary";
import { Menu } from "components/menu/menu";
import { MockMoves } from "components/movie-items/mockMovies";

import styles from "./movies-container.module.scss";

export const MoviesContainer = () => {
  return (
    <div className={styles.moviesContainer}>
      <Menu />
      <div className={styles.foundItems}>
        <span className={styles.span}>39</span>
        <span>movies found</span>
      </div>
      <ErrorBoundary>
        <MockMoves />
      </ErrorBoundary>
    </div>
  );
};
