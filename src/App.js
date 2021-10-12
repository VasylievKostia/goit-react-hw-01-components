import './App.css';

import { Profile } from './components/profile/Profile';
import user from './data/user.json'

import statisticalData from '../src/data/statistical-data.json'
import { Statistics } from './components/statistics/Statistics'

import friendsListData from './data/friends-list-data.json'
import {FriendsList} from './components/friends-list/Friends-list'

import transactionsData from './data/transactions.json'
import {Transactions} from './components/transactions/tranactions'


const { name, tag, location, avatar } = user

function App() {
  return (
    <div className="App" >
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData}
      />
      <FriendsList friends={friendsListData} />
      <Transactions items={transactionsData} />;
      
    </div>
  );
}

export default App;
