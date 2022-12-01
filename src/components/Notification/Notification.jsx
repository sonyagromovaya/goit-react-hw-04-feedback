import PropTypes from 'prop-types';
import style from './Notification.module.scss';

export const Notification = ({ message }) => {
  return <div className={style.notification}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
