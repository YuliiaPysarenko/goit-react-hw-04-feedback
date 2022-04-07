import {useReducer} from 'react';
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

function reducer(state, action) {
  switch (action.type) {
    case "good":
      return {...state, good: state.good + action.payload};
      
    case "neutral":
      return {...state, neutral: state.neutral + action.payload};
      
    case "bad":
      return {...state, bad: state.bad + action.payload};
    
    default:
      return state;
  }
}

function App () {

  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleSetFeedback = ({target:{name}}) => {
    dispatch({type: name, payload: 1})
  }

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad
  }

  const countPositiveFeedbackPercentage = () => {
    const totalCount = countTotalFeedback();
    return !totalCount ? 0 : Math.round((state.good / totalCount) * 100);
  }

  // render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleSetFeedback} />
        </Section>
        
        <Section title="Statistics">
          {!countTotalFeedback() ? 
          <Notification message="There is no feedback"></Notification> :
            <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
          }
        </Section>
      </div>
      )
  // }
}

export default App;