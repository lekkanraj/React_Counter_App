import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  let [time, updateTimer] = useState(0);
  let [timeStatus, updateTimerStatus] = useState(0);

  useEffect(() => {
    console.log('timeStatus=' + timeStatus);
    if (timeStatus === 1) {
      setInterval(() => {
        updateTimer(time + 1);
      }, 100);
    }
  }, [timeStatus, time]);

  let updateTime = (res) => {
    updateTimerStatus(res);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h3>Timer: {time}</h3>
      <div>
        <button onClick={() => updateTime(1)}>Start</button>
        <button onClick={() => updateTime(0)}>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
