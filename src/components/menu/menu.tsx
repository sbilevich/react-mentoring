import classNames from 'classnames';
import { useState } from 'react';
import styles from './menu.module.scss';

export enum Genres {
  All = 'All',
  Documentary = 'Documentary',
  Comedy = 'Comedy',
  Horror = 'Horror',
  Crime = 'Crime',
}
const menu = [
  Genres.All,
  Genres.Documentary,
  Genres.Comedy,
  Genres.Horror,
  Genres.Crime,
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
