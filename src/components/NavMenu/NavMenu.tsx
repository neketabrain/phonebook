import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavMenu.module.scss';
import { NavMenuProps } from './NavMenu.types';

const NavMenu: FC<NavMenuProps> = (props) => {
  const { menuItems } = props;

  return (
    <ul className={styles.menu}>
      {menuItems.map(({ path, label }) => (
        <li key={path + label}>
          <NavLink exact={true} to={path} activeClassName={styles.activeLink} className={styles.link}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
