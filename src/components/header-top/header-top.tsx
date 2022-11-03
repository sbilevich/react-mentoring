import { AddMovieButton } from "../add-movie-button/add-movie-button";
import { Logo } from "../logo/logo";

import styles from './header-top.module.scss'

export const HeaderTop =() => {
  return (
  <div className={styles.headerWpapper}>
    <Logo />
    <AddMovieButton />
  </div>
  )
}
