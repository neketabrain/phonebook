import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { DeleteIcon, EditIcon, InfoIcon } from 'src/assets';
import { Column, ColumnRender } from 'src/components/Table/Table.types';
import { PATHS } from 'src/constants';
import { ContactType } from 'src/services/contacts/contacts.types';

import styles from '../ContactsTable.module.scss';

const TableData: FC<ColumnRender<ContactType>> = ({ item }) => {
  return (
    <ul className={styles.actionList}>
      <li>
        <Link to={`${PATHS.contacts}/${item.id}`}>
          <InfoIcon />
        </Link>
      </li>
      <li>
        <Link to={`${PATHS.contacts}/${item.id}/edit`}>
          <EditIcon />
        </Link>
      </li>
      <li>
        <button>
          <DeleteIcon />
        </button>
      </li>
    </ul>
  );
};

const Actions = (): Column<ContactType> => ({
  title: '',
  Render: TableData,
  cellClassName: styles.rightAlignment,
  headingClassName: styles.rightAlignment,
});

export default Actions;
