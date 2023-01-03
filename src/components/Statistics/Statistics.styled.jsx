import styled from '@emotion/styled';

export const StatisticsForm = styled.section`
  width: 450px;
  border: 1px solid rgba(79, 79, 79, 0.75);
  border-radius: 8px;
  margin: auto;
  align-items: center;
  flex-direction: column;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StatisticsTitle = styled.h2`
  text-align: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  width: 450px;

  list-style: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const StatisticsItems = styled.li`
  display: flex;
  flex-grow: 1;
  background-color: lightgray;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 1px solid rgba(79, 79, 79, 0.75);
  border-radius: 8px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: white;

  padding-top: 10px;
  padding-bottom: 10px;
`;
