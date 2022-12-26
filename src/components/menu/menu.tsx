import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { fetchMoviesAction } from 'redux/movies';

import styles from './menu.module.scss';

export enum Genres {
  All = 'All',
  Documentary = 'Documentary',
  Comedy = 'Comedy',
  Horror = 'Horror',
  Crime = 'Crime',
}
const menuItems = [
  Genres.All,
  Genres.Documentary,
  Genres.Comedy,
  Genres.Horror,
  Genres.Crime,
];

const sortOptions = [
  { id: 'release_date', name: 'Release date' },
  { id: 'title', name: 'Title' },
];

export const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>(Genres.All);
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const filter = selectedMenu === Genres.All ? [] : [selectedMenu];
    dispatch(fetchMoviesAction({ sortBy, sortOrder: 'asc', filter }));
  }, [sortBy, selectedMenu, dispatch]);

  return (
    <div className={styles.menuWrapper}>
      <nav className={styles.menuItems}>
        {menuItems.map((item) => {
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
        <select
          className={styles.sortSelect}
          required
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option
              key={option.id}
              value={option.id}
              className={styles.option}
              onSelect={() => setSortBy(option.id)}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
