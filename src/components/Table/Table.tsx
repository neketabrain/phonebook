import classNames from 'classnames';
import React from 'react';

import styles from './Table.module.scss';
import { TableProps } from './Table.types';

const Table = <T extends unknown>(props: TableProps<T>): JSX.Element => {
  const { columns, items, onRowDoubleClick } = props;

  const rowClasses = classNames(styles.tableRow, !!onRowDoubleClick && styles.pointer);

  const handleDoubleClick = (item: T) => () => {
    if (onRowDoubleClick) {
      onRowDoubleClick(item);
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headRow}>
          {columns.map((column, idx) => (
            <th className={classNames(styles.heading, column.headingClassName)} key={idx}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map((item, idx) => (
          <tr key={idx} className={rowClasses} onDoubleClick={handleDoubleClick(item)}>
            {columns.map(({ Render, ...column }, columnIdx) => (
              <td className={classNames(styles.tData, column.cellClassName)} key={columnIdx}>
                <Render item={item} idx={idx} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
