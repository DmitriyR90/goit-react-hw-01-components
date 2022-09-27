import styled from 'styled-components';

export const Table = styled.table`
  background-color: white;
  margin: 16px 0 16px 16px;
  width: 350px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #00b1b1;
`;

export const TableData = styled.tr`
  text-align: center;
  &:nth-child(odd) {
    background: white;
  }
  &:nth-child(even) {
    background: #e0e0e0;
  }
`;

export const TypeColumn = styled.td`
  text-align: start;
  padding-left: 32px;
`;
