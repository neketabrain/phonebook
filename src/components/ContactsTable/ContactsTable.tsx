import React, { useCallback, useMemo, useState, FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Table, Button } from 'src/components';
import { PATHS } from 'src/constants';
import { ContactType } from 'src/services/contacts/contacts.types';

import { Actions, Avatar, Name, Email, Phone } from './columns';
import { OFFSET } from './ContactsTable.constants';
import styles from './ContactsTable.module.scss';
import { ContactsTableProps } from './ContactsTable.types';
import { sortContacts } from './ContactsTable.utils';

const columns = [Avatar(), Name(), Phone(), Email(), Actions()];

const ContactsTable: FC<ContactsTableProps> = (props) => {
  const { items } = props;
  const sortedContacts = useMemo(() => sortContacts(items), [items]);

  const history = useHistory();

  const [offset, setOffset] = useState(OFFSET);
  const showMore = () => {
    setOffset((prev) => prev + OFFSET);
  };

  const handleDoubleClick = useCallback(
    (contact: ContactType) => {
      history.push(`${PATHS.contacts}/${contact.id}`);
    },
    [history]
  );

  return (
    <div className={styles.container}>
      <Table items={sortedContacts.slice(0, offset)} columns={columns} onRowDoubleClick={handleDoubleClick} />

      {items.length > offset && (
        <Button variant="secondary" onClick={showMore} className={styles.button}>
          Показать еще
        </Button>
      )}
    </div>
  );
};

export default ContactsTable;
