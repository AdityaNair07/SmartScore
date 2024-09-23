import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";

const Result = () => {
  const { score } = useContext(MyContext);
  const { totalScore } = useContext(MyContext);

  console.log("Total score: ", totalScore);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <h1 className="p-3 text-xl font-semibold text-center">
        You have scored: {score + "/" + totalScore}
      </h1>
      <Link
        to="/"
        className={`font-semibold text-lg py-2 px-3 rounded-md shadow-md uppercase bg-orange-500 text-white`}
      >
        Return to Home
      </Link>
    </div>
  );
};

export default Result;
