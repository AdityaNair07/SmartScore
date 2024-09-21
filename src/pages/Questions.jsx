import { useContext, useState } from "react";
import { MyContext } from "../MyContext";

const Questions = () => {
  const { questions, setQuestions } = useContext(MyContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log("Questions page: ", questions);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="w-full h-screen bg-[wheat]">
      <h1 className="text-2xl font-semibold text-center p-2">Questions</h1>
      <div className="flex flex-col items-start gap-5">
        {questions[currentQuestion].question}
      </div>
      <button onClick={() => handleNext()}>Next</button>
    </div>
  );
};

export default Questions;
