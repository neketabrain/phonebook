import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { ContactsTable, Button, LoaderBlock } from 'src/components';
import { getContactsState } from 'src/store/contacts';

import styles from './Contacts.module.scss';

const Contacts: FC = () => {
  const { contacts, isLoading } = useSelector(getContactsState);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Список контактов</h2>
        <Button>Создать контакт</Button>
      </div>

      <div className={styles.table}>
        {isLoading && <LoaderBlock />}
        <ContactsTable items={contacts} />
      </div>
    </div>
  );
};

export default Contacts;
