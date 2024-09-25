import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";

const Questions = () => {
  const { questions } = useContext(MyContext);
  const { setScore } = useContext(MyContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Shuffle options only when the currentQuestion changes
  useEffect(() => {
    if (questions) {
      console.log(questions);

      const options = [...questions[currentQuestion].incorrect_answers];
      const randomIndex = Math.floor(Math.random() * (options.length + 1));
      options.splice(randomIndex, 0, questions[currentQuestion].correct_answer);
      setShuffledOptions(options); // Store shuffled options in state
    }
  }, [currentQuestion, questions]);

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === questions[currentQuestion].correct_answer);
    if (option === questions[currentQuestion].correct_answer) {
      console.log("Correct answer selected");
      setScore((prev) => prev + 5);
    }
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      resetState();
    }
  };

  // Reset state when moving to next question
  const resetState = () => {
    setIsCorrect(null);
    setSelectedOption(null);
  };

  // Handle submission
  const handleSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div className="w-full h-screen bg-[wheat]">
      <h1 className="p-2 mb-10 text-2xl font-semibold text-center">
        Questions
      </h1>
      <div className="flex flex-col items-start w-1/2 px-4 py-5 mx-auto border border-orange-500 rounded-md shadow-md text-wrap">
        {questions && (
          <>
            <h1 className="w-full mb-10 text-lg font-semibold text-start text-wrap">
              {questions[currentQuestion].question}
            </h1>

            <div className="flex flex-col items-start gap-5">
              {shuffledOptions.map((option, index) => (
                <button
                  key={index}
                  disabled={selectedOption !== null} // Disable after selection
                  className={`border border-orange-500 rounded-md p-2 text-lg
                    ${
                      selectedOption === option
                        ? isCorrect
                          ? "text-white bg-green-500"
                          : "text-white bg-red-500"
                        : "bg-white text-orange-600"
                    }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
        {/* <h1 className="w-full mb-5 text-2xl font-semibold text-center text-orange-500">
            Loading...
          </h1> */}

        <Link
          to={currentQuestion === questions?.length - 1 ? "/result" : null}
          className="px-3 py-2 mt-10 text-lg font-semibold text-white uppercase bg-orange-500 rounded-md shadow-md"
          onClick={() =>
            currentQuestion === questions?.length - 1
              ? handleSubmit()
              : handleNext()
          }
        >
          {currentQuestion === questions?.length - 1 ? "Submit" : "Next"}
        </Link>
      </div>
    </div>
  );
};

export default Questions;
