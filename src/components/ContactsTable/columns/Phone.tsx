import React, { FC } from 'react';

import { Column, ColumnRender } from 'src/components/Table/Table.types';
import { ContactType } from 'src/services/contacts/contacts.types';

const TableData: FC<ColumnRender<ContactType>> = ({ item }) => <>{item.phone}</>;

const Phone = (): Column<ContactType> => ({
  title: 'Телефон',
  Render: TableData,
});

export default Phone;
