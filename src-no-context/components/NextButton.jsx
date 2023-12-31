import PropTypes from "prop-types";

NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.any,
  numQuestions: PropTypes.number.isRequired,
  index: PropTypes.number,
};

export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
