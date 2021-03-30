import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Header } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './Router.module.scss';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className={styles.main}>
        <Switch>
          <Route exact={true} path={PATHS.contacts} />
          <Route exact={true} path={PATHS.createContact} />
          <Route exact={true} path={PATHS.editContact} />
          <Route exact={true} path={PATHS.contact} />

          <Redirect to={PATHS.contacts} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
