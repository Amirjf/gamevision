import styled from 'styled-components';

export const StyledTable = styled.table`
  background-color: ${({ bg }) => bg || '#734bac'};
  color: ${({ color }) => color || '#fff'};
  font-size: 12px;
  border-spacing: 1;
  border-collapse: collapse;
  border-radius: 6px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  * {
    position: relative;
  }

  td,
  th {
    padding-left: 15px;
  }

  tbody tr:first-child td {
    padding-top: 18px;
    padding-bottom: 7px;
  }

  td:nth-child(even) {
    color: #a07ed2;
  }

  tbody tr {
    height: 34px;
    border-bottom: 1px solid #8557c4;
    &:last-child {
      border: 0;
    }
  }
`;
