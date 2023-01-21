import { AppButton } from 'components/app-button/app-button';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { fetchMoviesAction } from 'redux/movies';
import { SearchView } from './search-view';

import styles from './search.module.scss';

export const Search = () => {
  const { searchQuery } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchMoviesAction({ searchText: searchQuery, searchBy: 'title' }),
      );
    }
  }, [searchQuery]);

  const dispatch = useAppDispatch();

  const handleSearch = (searchText: string) => {
    navigate(`/search/${searchText}`);
    dispatch(fetchMoviesAction({ searchText, searchBy: 'title' }));
  };

  return <SearchView onSearch={handleSearch} searchQuery={searchQuery} />;
};
