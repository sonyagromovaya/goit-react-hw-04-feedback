import PropTypes from 'prop-types';
import style from './Section.module.scss';

export const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h2 className={style.section__title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
