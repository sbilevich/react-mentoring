import classNames from 'classnames';
import { useState } from 'react';
import styles from './menu.module.scss';

export enum Genres {
  ALL = 'all',
  DOCUMENTARY = 'Documentary',
  COMEDY = 'Comedy',
  HORROR = 'Horror',
  CRIME = 'Crime',
}
const menu = [
  Genres.ALL,
  Genres.DOCUMENTARY,
  Genres.COMEDY,
  Genres.HORROR,
  Genres.CRIME,
];

const sortOptions = ['Release date', 'Title'];

export const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('all');

  return (
    <div className={styles.menuWrapper}>
      <nav className={styles.menuItems}>
        {menu.map((item) => {
          const active = item === selectedMenu;

          return (
            <div
              key={item}
              className={classNames(styles.menuItem, {
                [styles.active]: active,
              })}
              onClick={() => setSelectedMenu(item)}
            >
              {item}
            </div>
          );
        })}
      </nav>
      <div className={styles.sorting}>
        <div className={styles.sortBy}>Sort by</div>
        <select className={styles.sortSelect} required>
          {sortOptions.map((option) => (
            <option key={option} value={option} className={styles.option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
