import PropTypes from 'prop-types';

// import user from 'data/user.json';
import { UserDescription } from './UserDescription/UserDescription';
import { UserStats } from './Stats/UserStats';
import { Profile } from './UserProfile.styled.jsx';
import { Box } from 'components/Box';
// import { Profile } from './UserProfile.styled';

export const UserProfile = ({ user }) => {
  return (
    <Box>
      <Profile>
        <UserDescription
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />

        <UserStats stats={user.stats} />
      </Profile>
    </Box>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({}),
};
