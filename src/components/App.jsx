import { Box } from './Box';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Statistics } from './statistics/Statistic';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import { UserProfile } from './user/UserProfile';

export const App = () => {
  return (
    <Box>
      <UserProfile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
