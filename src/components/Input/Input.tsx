import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = (props) => {
  const { label, error, className, ...rest } = props;

  const labelClasses = classNames(styles.label, className);
  const inputClasses = classNames(styles.input, !!error && styles.hasError);

  return (
    <label className={labelClasses}>
      {label}
      <input className={inputClasses} {...rest} />

      {!!error && typeof error === 'string' && <p className={styles.error}>{error}</p>}
    </label>
  );
};

export default Input;
