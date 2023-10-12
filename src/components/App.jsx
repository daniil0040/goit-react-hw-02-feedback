import { Component } from "react"
import { Statistic } from "./Statistic/Statistic";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

 countTotalFeedback = () => {
   const { good, neutral, bad } = this.state
   return good + neutral + bad
 }
  countPositiveFeedbackPercentage = (total) => {
    return (this.state.good / total * 100).toFixed(1)
  }

  handleLeaveFeedBack = (key) => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1
      }))
  }
  render() {
    const { good, neutral, bad } = this.state
    const totalFeedback = this.countTotalFeedback()
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleLeaveFeedBack} />
        {totalFeedback === 0 ? <Notification message="There is no feedback"/> : <Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>}
      </Section>
    );
  }
};
