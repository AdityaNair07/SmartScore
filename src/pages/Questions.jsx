import { useContext, useEffect, useState } from "react";
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

  // let options = [];

  // useEffect(() => {
  //   if (questions) {
  //     options = questions[currentQuestion].incorrect_answers;

  //     const randomIndex = Math.floor(Math.random() * (options.length + 1));

  //     const valueToInsert = questions[currentQuestion].correct_answer;
  //     options.splice(randomIndex, 0, valueToInsert);

  //     console.log("options: ", options);
  //   }
  // }, []);

  return (
    <div className="w-full h-screen bg-[wheat]">
      <h1 className="p-2 mb-10 text-2xl font-semibold text-center">
        Questions
      </h1>
      <div className="flex flex-col items-start w-1/2 px-4 py-5 mx-auto border border-orange-500 rounded-md shadow-md">
        {questions ? (
          <>
            <h1 className="mb-10 text-lg font-semibold text-start">
              {questions[currentQuestion].question}
            </h1>

            <div className="flex flex-col items-start gap-5">
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
          <h1 className="w-full mb-5 text-2xl font-semibold text-center text-orange-500">
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
