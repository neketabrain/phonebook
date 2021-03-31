import { FC } from 'react';

export type ColumnRender<T> = {
  item: T;
  idx: number;
};

export type Column<T> = {
  title: string;
  Render: FC<ColumnRender<T>>;
  headingClassName?: string;
  cellClassName?: string;
};

export type TableProps<T> = {
  columns: Column<T>[];
  items: T[];
};
