import React, { FC } from 'react';

import { NavMenu } from 'src/components';

import { MENU_ITEMS } from './Header.constants';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        Phone<span>Book</span>
      </h1>

      <NavMenu menuItems={MENU_ITEMS} />
    </header>
  );
};

export default Header;
