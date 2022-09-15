import PropTypes from 'prop-types';

import user from 'data/user.json';
import { UserDescription } from './UserDescription/UserDescription';
import { UserStats } from './Stats/UserStats';

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
      />
      <UserStats stats={stats} />
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({}),
};
