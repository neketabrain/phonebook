import classNames from 'classnames';
import React, { FC } from 'react';

import { ClassName } from 'src/types';

import styles from './Loader.module.scss';

const Loader: FC<ClassName> = (props) => {
  const { className } = props;
  const classes = classNames(styles.loader, className);

  return (
    <div className={classes}>
      <div className={styles.loaderBlade} />
      <div className={styles.loaderBlade} />
      <div className={styles.loaderBlade} />
      <div className={styles.loaderBlade} />
      <div className={styles.loaderBlade} />
      <div className={styles.loaderBlade} />
      <div className={styles.loaderBlade} />
      <div className={styles.loaderBlade} />
    </div>
  );
};

export default Loader;
