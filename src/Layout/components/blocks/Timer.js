import React from "react";
import Countdown from "react-countdown";
import "./style/counter.scss";

const Counter = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="counter">
        <div className="timer-cell">
          <span className="time">{days}</span>
          <span className="time-tag">days</span>
        </div>
        <div className="timer-cell">
          <span className="time">{hours}</span>
          <span className="time-tag">hrs</span>
        </div>
        <div className="timer-cell">
          <span className="time">{minutes}</span>
          <span className="time-tag">mins</span>
        </div>
        <div className="timer-cell">
          <span className="time">{seconds}</span>
          <span className="time-tag">secs</span>
        </div>
      </div>
    );
  };
  return <Countdown date={Date.now() + 6000000000} renderer={renderer} />;
};

export default Counter;
