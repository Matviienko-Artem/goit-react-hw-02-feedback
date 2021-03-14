import React from 'react';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <>
      <button type="button" onClick={goodFeedback}>
        Good
      </button>
      <button type="button" onClick={neutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={badFeedback}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
