import styled from '@emotion/styled';

export const Table = styled.table`
  margin: auto;
  width: 450px;
  border: 1px solid rgba(79, 79, 79, 0.75);
  border-radius: 8px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  text-align: center;
`;

export const TableHead = styled.th`
  border: 0px solid #b5b5b5;
  background-color: #00bcd5;
  color: #ffffff;
  text-transform: uppercase;

  width: 33.3%;
  padding: 15px 5px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`;

export const TableRow = styled.tr`
  :nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`;

export const TableItem = styled.td`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  padding: 15px 5px;
  transition: background-color 250ms linear;
  cursor: pointer;
  text-transform: capitalize;

  :hover,
  :focus {
    background-color: #c9dcdf;
    transition: background-color 250ms linear;
  }
`;
