import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends React.Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    good: this.props.value,
    neutral: this.props.value,
    bad: this.props.value,
  };

  onLeaveFeedback = e => {
    let onTarget = e.target.name;

    this.setState(prevState => ({
      [onTarget]: prevState[onTarget] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="Statistics">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  initialValue: PropTypes.number,
};

export default App;
