import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const nameButton = Object.keys(options);

  return (
    <>
      {nameButton.map(button => {
        return (
          <button
            key={button}
            type="button"
            name={button}
            onClick={onLeaveFeedback}
            className={styles.button}
          >
            {button}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
