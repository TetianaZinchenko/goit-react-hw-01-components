import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  width: 450px;
  border: 1px solid rgba(79, 79, 79, 0.75);

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  margin: auto;
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  display: block;
  width: 200px;

  border: 1px solid rgba(79, 79, 79, 0.75);
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
`;

export const Tag = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 16px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: gray;
`;

export const Location = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  width: 450px;

  list-style: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const StatsItems = styled.li`
  display: flex;
  flex-grow: 1;
  background-color: #ecf1f4;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 1px solid rgba(79, 79, 79, 0.75);
  border-radius: 8px;

  width: 33.3%;
`;

export const Label = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: gray;

  margin-top: 30px;
`;

export const Quantity = styled.span`
  margin-bottom: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
