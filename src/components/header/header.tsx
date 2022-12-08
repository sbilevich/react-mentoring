import { AppButton } from 'components/app-button/app-button';
import { Actions, EditMovie } from 'components/edit-movie/edit-movie';
import { useState } from 'react';
import { Logo } from '../logo/logo';

import styles from './header.module.scss';

export const Header = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const handleAddClick = () => setShowAddModal(true);

  const handleSubmit = () => setShowAddModal(false);

  return (
    <div className={styles.headerWpapper}>
      <Logo />
      <AppButton text="+ Add Movie" onButtonClick={handleAddClick} />
      {showAddModal && (
        <EditMovie
          title="Add movie"
          onClose={handleSubmit}
          action={Actions.Add}
        />
      )}
    </div>
  );
};
