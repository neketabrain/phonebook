import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = (props) => {
  const { children, className, variant = 'primary', ...rest } = props;
  const classes = classNames(styles.baseButton, styles[`${variant}Button`], className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
