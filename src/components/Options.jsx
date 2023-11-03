import { useQuizData } from "../context/QuizContext";
import PropTypes from "prop-types";

Options.propTypes = {
  question: PropTypes.any,
};

export default function Options({ question }) {
  const { answer, dispatch } = useQuizData();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
