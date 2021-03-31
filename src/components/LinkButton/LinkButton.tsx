import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from '../Button/Button.module.scss';

import { LinkButtonProps } from './LinkButton.types';

const LinkButton: FC<LinkButtonProps> = (props) => {
  const { children, className, variant = 'primary', ...rest } = props;
  const classes = classNames(styles.baseButton, styles[`${variant}Button`], className);

  return (
    <Link className={classes} {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
