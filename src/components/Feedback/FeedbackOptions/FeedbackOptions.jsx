import React from 'react';
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({good, onLeaveFeedbackGood, neutral, onLeaveFeedbackNeutral, bad, onLeaveFeedbackBad}) =>  {
  
  return (<div className={styles.buttonConteiner}>
          
             <button className={styles.button}
               type="button"
               key='good'
               id={good}
      onClick={onLeaveFeedbackGood}>Good</button>
    <button className={styles.button}
               type="button"
               key='neutral'
               id={neutral}
      onClick={onLeaveFeedbackNeutral}>Neutral</button>
    <button className={styles.button}
               type="button"
               key='bad'
               id={bad}
               onClick={onLeaveFeedbackBad}>Bad</button>
        
          
            
      </div>
    );
}
export default FeedbackOptions




