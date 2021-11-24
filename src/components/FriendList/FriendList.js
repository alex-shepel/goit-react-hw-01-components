import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = props => {
  const itemsMarkup = props.friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return <ul className={s.list}>{itemsMarkup}</ul>;
};

export default FriendList;
