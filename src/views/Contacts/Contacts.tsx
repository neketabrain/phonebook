import React, { useEffect, useState, FC } from 'react';

import { ContactsTable, LinkButton } from 'src/components';
import { PATHS } from 'src/constants';
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
        <LinkButton to={PATHS.createContact}>Создать контакт</LinkButton>
      </div>

      <ContactsTable items={contacts} />
    </div>
  );
};

export default Contacts;
