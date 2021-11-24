import Profile from './Profile/Profile';
import user from './res/user.json';
import s from './App.module.css';

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
    </div>
  );
}

export default App;
