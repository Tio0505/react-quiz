import { useQuizData } from "../../src/context/QuizContext";

export default function Progress() {
  const { index, points, numQuestions, maxPossiblePoints, answer } =
    useQuizData();
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
