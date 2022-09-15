import PropTypes from 'prop-types';

import data from 'data/data.json';
import { PageTitle } from './Title';
import { UserStats } from './Stats/UserStats';
import { Profile } from './UserProfile.styled.jsx';

export const UserProfile = ({ user }) => {
  return (
    <Profile>
      <PageTitle
    //     username={user.username}
    //     tag={user.tag}
    //     location={user.location}
    //     avatar={user.avatar}
    //   />
    //   <UserStats stats={stats} />
    // </Profile>
  );
};
