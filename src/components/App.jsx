import user from 'data/user.json';
import { UserProfile } from './User/UserProfile';

export const App = () => {
  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};
