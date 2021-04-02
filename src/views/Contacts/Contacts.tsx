import React, { useState, useCallback, FC } from 'react';
import { useSelector } from 'react-redux';

import { ContactsTable, Button, LoaderBlock, CreateContactModal } from 'src/components';
import { getContactsState } from 'src/store/contacts';

import styles from './Contacts.module.scss';

const Contacts: FC = () => {
  const { contacts, isLoading } = useSelector(getContactsState);

  const [isOpened, setOpened] = useState(false);
  const openModal = useCallback(() => setOpened(true), []);
  const closeModal = useCallback(() => setOpened(false), []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Список контактов</h2>
        <Button onClick={openModal}>Создать контакт</Button>
      </div>

      <div className={styles.table}>
        {isLoading && <LoaderBlock />}
        <ContactsTable items={contacts} />
      </div>

      {isOpened && <CreateContactModal onClose={closeModal} />}
    </div>
  );
};

export default Contacts;
