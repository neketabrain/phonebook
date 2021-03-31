import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from 'src/constants';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to={PATHS.contacts}>
          Phone<span>Book</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
