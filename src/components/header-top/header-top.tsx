import { AppButton } from 'components/app-button/app-button';
import { EditMovie } from 'components/edit-movie/edit-movie';
import { useState } from 'react';
import { Logo } from '../logo/logo';

import styles from './header-top.module.scss';

export const HeaderTop = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const handleAddClick = () => setShowAddModal(true);

  const handleSubmit = () => setShowAddModal(false);

  return (
    <div className={styles.headerWpapper}>
      <Logo />
      <AppButton text="+ Add Movie" onButtonClick={handleAddClick} />
      {showAddModal && <EditMovie title="Add movie" onSubmit={handleSubmit} />}
    </div>
  );
};
