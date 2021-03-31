import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Loader.module.scss';
import { LoaderProps } from './Loader.types';

const Loader: FC<LoaderProps> = (props) => {
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
