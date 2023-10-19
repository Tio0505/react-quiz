import { useEffect } from "react";
import PropTypes from "prop-types";

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  secondRemaining: PropTypes.number,
};

export default function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
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
