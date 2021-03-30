import React, { FC } from 'react';

import 'src/styles/index.scss';
import { Router } from 'src/router';

import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <Router />
      </div>
    </div>
  );
};

export default App;
