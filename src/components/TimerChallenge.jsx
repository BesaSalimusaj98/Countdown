import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timeRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const dialog = useRef();

  function handleReset() {
    setTimerRemaining(targetTime * 1000);
    setTimerIsActive(false)
  }

  function handleStart() {
    setTimerIsActive(true);
    timer.current = setInterval(() => {
      setTimerRemaining(prevTimeRemaining =>
        prevTimeRemaining - 10 > 0 ? prevTimeRemaining - 10 : 0
      );
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

    if (timeRemaining <= 0) {
      clearInterval(timer.current);
      dialog.current.open();
    }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
