import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import { UserProfile } from './user/UserProfile';
import { Box } from './Box';

import { Statistics } from './statistics/Statistic';
import { FriendList } from './friendList/FriendListItem';

export const App = () => {
  return (
    <Box>
      <UserProfile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />;
    </Box>
  );
};
