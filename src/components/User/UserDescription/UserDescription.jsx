import PropTypes from 'prop-types';

export const UserDescription = ({ username, tag, location, avatar }) => {
  return (
    <div className="description">
      <img src={avatar} alt={`${username} avatar`} className="avatar" />
      <p className="username">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

UserDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
