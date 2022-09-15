import PropTypes from 'prop-types';
import {
  UserInfo,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
} from './UserDescritpion.styled.jsx';

export const UserDescription = ({ username, tag, location, avatar }) => {
  return (
    <UserInfo>
      <UserImage src={avatar} alt={`${username} avatar`} />
      <UserName>{username}</UserName>
      <UserTag>{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserInfo>
  );
};

UserDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
