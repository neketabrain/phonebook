import React, { FC } from 'react';

import { Column, ColumnRender } from 'src/components/Table/Table.types';
import { ContactType } from 'src/services/contacts/contacts.types';

const TableData: FC<ColumnRender<ContactType>> = ({ item }) => {
  const { firstName, lastName, middleName } = item;

  return <>{`${lastName} ${firstName} ${middleName}`}</>;
};

const Name = (): Column<ContactType> => ({
  title: 'ФИО',
  Render: TableData,
});

export default Name;
