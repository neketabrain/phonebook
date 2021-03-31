import React, { FC } from 'react';

import { Column, ColumnRender } from 'src/components/Table/Table.types';
import { ContactType } from 'src/services/contacts/contacts.types';

const TableData: FC<ColumnRender<ContactType>> = ({ item }) => <>{item.email}</>;

const Email = (): Column<ContactType> => ({
  title: 'Email',
  Render: TableData,
});

export default Email;
