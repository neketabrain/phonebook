import React, { FC } from 'react';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        Phone<span>Book</span>
      </h1>
    </header>
  );
};

export default Header;
