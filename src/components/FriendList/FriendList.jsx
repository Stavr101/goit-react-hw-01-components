import PropTypes from 'prop-types';
import { FriendsBoard } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsBoard>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendsBoard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
