import React, { FC } from 'react';

import { Loader } from 'src/components';

import styles from './LoaderBlock.module.scss';

const LoaderBlock: FC = () => {
  return (
    <div className={styles.container}>
      <Loader className={styles.loader} />
    </div>
  );
};

export default LoaderBlock;
