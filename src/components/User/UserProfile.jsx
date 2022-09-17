import PropTypes from 'prop-types';

import user from 'data/user.json';
import { UserDescription } from './UserDescription/UserDescription';
import { UserStats } from './Stats/UserStats';
// import { Profile } from './UserProfile.styled.jsx';
import { Box } from 'components/Box';

export const UserProfile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Box>
      <UserDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <UserStats stats={stats} />
    </Box>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({}),
};
