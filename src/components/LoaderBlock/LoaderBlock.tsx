import classNames from 'classnames';
import React, { FC } from 'react';

import { Loader } from 'src/components';

import styles from './LoaderBlock.module.scss';
import { LoaderBlockProps } from './LoaderBlock.types';

const LoaderBlock: FC<LoaderBlockProps> = (props) => {
  const { className } = props;
  const classes = classNames(styles.container, className);

  return (
    <div className={classes}>
      <Loader className={styles.loader} />
    </div>
  );
};

export default LoaderBlock;
