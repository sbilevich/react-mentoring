import { MovieCard } from "components/movie-card/movie-card";
import movie1 from "../../assets/Movie1.jpg";

import styles from "./movie-items.module.scss";

export const MovieItems = () => {
  return (
    <div className={styles.movies}>
      <MovieCard
        img={movie1}
        title="Pulp Fiction"
        year={2004}
        description="Action & Adventure"
      />
      <MovieCard
        img={movie1}
        title="Pulp Fiction"
        year={2004}
        description="Action & Adventure"
      />
      <MovieCard
        img={movie1}
        title="Pulp Fiction"
        year={2004}
        description="Action & Adventure"
      />
      <MovieCard
        img={movie1}
        title="Pulp Fiction"
        year={2004}
        description="Action & Adventure"
      />
      <MovieCard
        img={movie1}
        title="Pulp Fiction"
        year={2004}
        description="Action & Adventure"
      />
      <MovieCard
        img={movie1}
        title="Pulp Fiction"
        year={2004}
        description="Action & Adventure"
      />
    </div>
  );
};
