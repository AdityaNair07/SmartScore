import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";

const Questions = () => {
  const { questions } = useContext(MyContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log("Questions page: ", questions);

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      console.log("Last question!");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div className="w-full h-screen bg-[wheat]">
      <h1 className="text-2xl font-semibold text-center mb-10 p-2">
        Questions
      </h1>
      <div className="flex flex-col w-1/2 mx-auto items-start py-5 px-4 border shadow-md rounded-md border-orange-500">
        {questions ? (
          <>
            <h1 className="text-lg font-semibold text-start mb-10">
              {questions[currentQuestion].question}
            </h1>
            <div className="flex flex-col gap-5 items-start">
              {questions[currentQuestion].incorrect_answers.map(
                (data, index) => {
                  return (
                    <button
                      className={`border border-orange-500 rounded-md p-2 text-lg bg-white text-orange-600`}
                      key={index}
                      onClick={() => console.log("selected: ", data)}
                    >
                      {data}
                    </button>
                  );
                }
              )}
            </div>
          </>
        ) : (
          <h1 className="w-full font-semibold text-2xl text-center text-orange-500 mb-5">
            Loading...
          </h1>
        )}
        <Link
          to={currentQuestion === questions?.length - 1 ? "/result" : null}
          className={`font-semibold text-lg py-2 px-3 rounded-md shadow-md uppercase bg-orange-500 text-white mt-10`}
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
