import { Header } from 'components/header/header';
import { MovieSearch } from 'components/movie-search/movie-search';

import styles from './header-component.module.scss';

export const HeaderComponent = () => (
  <header className={styles.header}>
    <Header />
    <MovieSearch />
  </header>
);
