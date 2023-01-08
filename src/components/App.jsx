import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions'
import React from 'react';
import Statistics  from './Feedback/Statistics/Statistics';
import Section from './Feedback/Section/Section';
import Notification from './Feedback/Notification/Notification'
import { useState } from "react";

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  const countTotalFeedback = () => {
        let result = 0
        result = good + neutral + bad
        
        return result    
  }
  const countPositiveFeedbackPercentage = () => {
        if (countTotalFeedback() === 0) {
            return 0
        }
        let procent = 0
        procent = Math.round(((good * 100) / countTotalFeedback()) )
        
        return procent
  }

  
  //  const handleClick = button => {
  //    console.log('hello')
  //    switch (button) {
  //     case 'good':
  //       setGood(state => state + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(state => state + 1);
  //       break;
  //     case 'bad':
  //       setBad(state => state + 1);
  //       break;
  //     default:
  //       return;
  //   }
  // };
  const onLeaveFeedbackGood = () => {
  setGood(state => state + 1);
  }
  
  const onLeaveFeedbackNeutral = () => {
    setNeutral(state => state + 1)
  }

  const onLeaveFeedbackBad = () => {
    setBad(state => state + 1)
  }
  
    return (
      
      <div
       style={{
        height: '100vh',
        fontSize: 30,
        color: '#010101'
      }}
>
       
        <Section title="Please leave feedback"/>
        <FeedbackOptions
          good={good}
          onLeaveFeedbackGood={onLeaveFeedbackGood}
          neutral={neutral}
          onLeaveFeedbackNeutral={onLeaveFeedbackNeutral}
          bad={bad}
          onLeaveFeedbackBad={onLeaveFeedbackBad}
        />
        
        {countTotalFeedback() === 0 ? <Notification message="There is no feedback"/>
         :
       <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}/>}
      </div>
    );
  };


export default App