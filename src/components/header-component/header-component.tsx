import { HeaderTop } from 'components/header-top/header-top';
import { MovieSearch } from 'components/movie-search/movie-search';

import styles from './header-component.module.scss';

export const HeaderComponent = () => (
  <header className={styles.header}>
    <HeaderTop />
    <MovieSearch />
  </header>
);
