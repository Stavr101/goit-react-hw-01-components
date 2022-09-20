import PropTypes from 'prop-types';
import {
  UserStatList,
  UserList,
  UserLabel,
  UserQuantity,
} from './UserStats.styled.jsx';

export const UserStats = ({ stats: { followers, views, likes } }) => {
  return (
    <UserStatList>
      <UserList>
        <UserLabel>Followers</UserLabel>
        <UserQuantity>{followers}</UserQuantity>
      </UserList>
      <UserList>
        <UserLabel>Views</UserLabel>
        <UserQuantity> {views} </UserQuantity>
      </UserList>
      <UserList>
        <UserLabel>Likes</UserLabel>
        <UserQuantity> {likes} </UserQuantity>
      </UserList>
    </UserStatList>
  );
};

UserStats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
