import s from './App.module.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from './res/user.json';
import data from './res/data.json';

function App() {
  return (
    <div className={s.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
}

export default App;
