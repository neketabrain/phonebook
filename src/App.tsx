import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';

import { Router } from 'src/router';
import { getContactsAction } from 'src/store/contacts';
import 'src/styles/index.scss';

import styles from './App.module.scss';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAction());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <Router />
      </div>
    </div>
  );
};

export default App;
