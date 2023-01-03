import PropTypes from 'prop-types';

import { FriendAvatar, FriendName, FriendStatus } from './Friend.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.oneOf([true, false]).isRequired,
};
