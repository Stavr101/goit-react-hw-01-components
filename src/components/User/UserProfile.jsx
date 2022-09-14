import PropTypes from 'prop-types';

import user from 'data/user.json';
import { UserDescription } from './UserDescription/UserDescription';

export const UserProfile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div>
      <UserDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({}),
};
