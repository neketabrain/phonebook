import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from 'src/constants';

import styles from './ReturnLink.module.scss';
import { ReturnLinkProps } from './ReturnLink.types';

const ReturnLink: FC<ReturnLinkProps> = (props) => {
  const { path = PATHS.contacts, text = 'Вернуться на главную', className } = props;
  const classes = classNames(styles.link, className);

  return (
    <Link to={path} className={classes}>
      {text}
    </Link>
  );
};

export default ReturnLink;
