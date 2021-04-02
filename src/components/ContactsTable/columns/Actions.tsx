import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { DeleteIcon, EditIcon, InfoIcon } from 'src/assets';
import { Column, ColumnRender } from 'src/components/Table/Table.types';
import { PATHS } from 'src/constants';
import { ContactType } from 'src/services/contacts/contacts.types';
import { deleteContact } from 'src/store/contacts';

import styles from '../ContactsTable.module.scss';

const TableData: FC<ColumnRender<ContactType>> = ({ item }) => {
  const dispatch = useDispatch();

  const deleteContactById = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <ul className={styles.actionList}>
      <li>
        <Link to={`${PATHS.contacts}/${item.id}`} aria-label="Информация">
          <InfoIcon />
        </Link>
      </li>
      <li>
        <Link to={`${PATHS.contacts}/${item.id}/edit`} aria-label="Редактировать">
          <EditIcon />
        </Link>
      </li>
      <li>
        <button onClick={deleteContactById} aria-label="Удалить">
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
