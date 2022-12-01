import PropTypes from 'prop-types';
import style from './Statistics.module.scss';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={style.info__wrapper}>
      <p className={style.info}>Good: {good}</p>
      <p className={style.info}>Neutral: {neutral}</p>
      <p className={style.info}>Bad: {bad}</p>
      <p className={style.info}>Total: {total}</p>
      <p className={style.info}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
