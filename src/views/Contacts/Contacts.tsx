import React, { useEffect, useState, FC } from 'react';

import { ContactsTable, Button, LoaderBlock } from 'src/components';
import { getContacts } from 'src/services';
import { ContactType } from 'src/services/contacts/contacts.types';

import { MOCK_DATA } from './Contacts.constants';
import styles from './Contacts.module.scss';
import { ContactsProps } from './Contacts.types';

const Contacts: FC<ContactsProps> = () => {
  const [isFetching, setFetching] = useState(true);
  const [contacts, setContacts] = useState<ContactType[]>(MOCK_DATA);

  useEffect(() => {
    setFetching(true);
    getContacts()
      .then(({ data }) => {
        setContacts(data);
      })
      .catch(() => {
        setContacts([]);
      })
      .finally(() => {
        setFetching(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Список контактов</h2>
        <Button>Создать контакт</Button>
      </div>

      <div className={styles.container}>
        {isFetching && <LoaderBlock />}
        <ContactsTable items={contacts} />
      </div>
    </div>
  );
};

export default Contacts;
