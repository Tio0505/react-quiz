import { useQuizData } from "../context/QuizContext";
import Options from "./Options";

export default function Questions() {
  const { questions, index } = useQuizData();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} />
    </div>
  );
}
