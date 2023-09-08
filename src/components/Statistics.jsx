// Statistics.jsx
import React from 'react';
import Notification from './Notification'; 
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    {total === 0 ? (
      <Notification message="There is no feedback" /> 
    ) : (
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </ul>
      </div>
    )}
  </div>
);

export default Statistics;


