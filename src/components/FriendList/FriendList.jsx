import PropTypes from 'prop-types';

import { Friend } from 'components/Friend/Friend';
import { FriendItem } from 'components/Friend/Friend.styled';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem key={id}>
            <Friend avatar={avatar} name={name} isOnline={isOnline} id={id} />
          </FriendItem>
        ))}
      </List>
    </div>
  );
};

FriendList.propTypes = {
  //   avatar: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   isOnline: PropTypes.oneOf([true, false]).isRequired,
  //   id: PropTypes.number.isRequired,

  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOf([true, false]).isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
