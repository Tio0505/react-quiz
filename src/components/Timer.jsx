import { useEffect } from "react";
import { useQuizData } from "../context/QuizContext";

export default function Timer() {
  const { secondRemaining, setTimerTick } = useQuizData();

  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(setTimerTick, 1000);

      return () => clearInterval(id);
    },
    [setTimerTick]
  );
  return (
    <div className="timer">
      <strong>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </strong>
    </div>
  );
}
