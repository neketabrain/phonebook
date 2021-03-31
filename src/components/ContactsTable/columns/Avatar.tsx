import React, { FC } from 'react';

import { Column, ColumnRender } from 'src/components/Table/Table.types';
import { ContactType } from 'src/services/contacts/contacts.types';

import styles from '../ContactsTable.module.scss';

const TableData: FC<ColumnRender<ContactType>> = ({ item }) => {
  if (!item.avatar) {
    return null;
  }

  return (
    <div className={styles.avatar}>
      <img src={item.avatar} alt="Фото" />
    </div>
  );
};

const Avatar = (): Column<ContactType> => ({
  title: '',
  Render: TableData,
});

export default Avatar;
