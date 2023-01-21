import { AppButton } from 'components/app-button/app-button';
import { FC, useEffect, useState } from 'react';

import styles from './search.module.scss';

export interface SearchViewProps {
  onSearch: (searchText: string) => void;
  searchQuery?: string;
}

const placeholder = 'What do you want to watch?';

export const SearchView: FC<SearchViewProps> = ({ onSearch, searchQuery }) => {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    if (searchQuery) {
      setSearchText(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <AppButton text="Search" onButtonClick={() => onSearch(searchText)} />
    </div>
  );
};
