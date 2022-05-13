import React from 'react';
import TableHeadItem from './table-head.component';
import TableRow from './table-row.component';
import { StyledTable } from './table.styles';

const Table = ({ theadData, tbodyData, bg }) => {
  return (
    <StyledTable bg={bg}>
      <thead>
        <tr>
          {theadData &&
            theadData.map((h) => {
              return <TableHeadItem key={h} item={h} />;
            })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return <TableRow key={item.id} data={item.items} />;
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
