import { useQuizData } from "../context/QuizContext";

export default function StartScreen() {
  const { handleStart, numQuestions } = useQuizData();

  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Let&apos;s start
      </button>
    </div>
  );
}
