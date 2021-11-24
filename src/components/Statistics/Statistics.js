import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  const listItemsMarkup = props.stats.map(({ id, label, percentage }) => (
    <li className={s.item} key={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  ));

  return (
    <section className={s.statistics}>
      {props.title && <h2 className={s.title}>{props.title}</h2>}
      <ul className={s.statList}>{listItemsMarkup}</ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;
