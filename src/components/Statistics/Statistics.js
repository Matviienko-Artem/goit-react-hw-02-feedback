import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <b>Good:</b> {good}
        </li>
        <li className={styles.list_item}>
          <b>Neutral:</b> {neutral}
        </li>
        <li className={styles.list_item}>
          <b>Bad:</b> {bad}
        </li>
        <li className={styles.list_item}>
          <b>Total:</b> {total}
        </li>
        <li className={styles.list_item}>
          <b>Positive feedback:</b>{' '}
          {positivePercentage ? positivePercentage : 0}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
