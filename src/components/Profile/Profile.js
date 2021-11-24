import s from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = props => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={props.avatar} alt="User avatar" className={s.avatar} />
      <p className={s.name}>{props.username}</p>
      <p className={s.tag}>@{props.tag}</p>
      <p className={s.location}>{props.location}</p>
    </div>

    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{props.stats.followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{props.stats.views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{props.stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
