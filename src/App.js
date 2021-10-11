import './App.css';
import { Profile } from './components/profile/Profile';
import user from './data/user.json'
import statisticalData from './data/statistical-data.json'
import { Statistics } from './components/statistics/Statistics'

import { FriendsList } from './components/friends-list/Friends-list';


const { name, tag, location, avatar, followers, views,likes } = user
// const { id, label, percentage} = statisticalData
// const statisticalData = 
// [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]


function App() {

  console.log(statisticalData.label)
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        id={statisticalData.id}
        label={statisticalData.label}
        percentage={statisticalData.percentage}
      />
      
    </div>
  );
}

export default App;
