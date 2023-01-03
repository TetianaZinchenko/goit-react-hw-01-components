import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  gap: 30px;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  border: 1px solid rgba(79, 79, 79, 0.75);
  border-radius: 8px;
  width: 450px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FriendStatus = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(79, 79, 79, 0.75);
  border-radius: 50%;

  margin-left: 80px;

  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  display: block;
  width: 100px;
`;

export const FriendName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
`;
