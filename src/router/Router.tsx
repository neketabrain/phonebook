import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Header } from 'src/components';
import { PATHS } from 'src/constants';
import { Contact, Contacts, EditContact } from 'src/views';

import styles from './Router.module.scss';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className={styles.main}>
        <Switch>
          <Route exact={true} path={PATHS.contacts} component={Contacts} />
          <Route exact={true} path={PATHS.editContact} component={Contact} />
          <Route exact={true} path={PATHS.contact} component={EditContact} />

          <Redirect to={PATHS.contacts} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
