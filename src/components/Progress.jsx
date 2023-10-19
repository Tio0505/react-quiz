import PropTypes from "prop-types";

Progress.propTypes = {
  numQuestions: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  maxPossiblePoints: PropTypes.number.isRequired,
  answer: PropTypes.any,
};

export default function Progress({
  index,
  points,
  numQuestions,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}
