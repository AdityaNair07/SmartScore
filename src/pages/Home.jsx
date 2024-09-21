import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";

const Home = () => {
  //   const [question, setQuestion] = useState();
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [type, setType] = useState(null);

  const { setQuestions } = useContext(MyContext);
  const { setTotalScore } = useContext(MyContext);

  const getQuestions = async (category, amount, difficulty, type) => {
    try {
      await axios
        .get(
          `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
        )
        .then((result) => {
          console.log(result);
          setQuestions(result.data.results);
        });

      setTotalScore(amount * 5);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("amount:", amount);
    console.log("type of amount:", typeof amount);
    console.log("category:", category);
    console.log("type of category:", typeof category);
  }, [amount, category]);

  return (
    <div className="w-full h-screen bg-[wheat] flex flex-col items-center gap-5">
      <h1 className="text-3xl font-semibold text-center p-2">SmartScore</h1>
      <h3 className="text-xl font-semibold text-center p-2">
        Interesting quizzes with tons of categories
      </h3>

      <div className="flex flex-col gap-4 w-1/3">
        <div className="flex items-center justify-between gap-2">
          <input
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="rounded-md shadow-md p-2 w-full bg-white"
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter number of questions"
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          <select
            name=""
            className="rounded-md shadow-md p-2 w-full"
            id="categories"
            onChange={(e) => setCategory(parseInt(e.target.value))}
          >
            <option className="p-1" value="select">
              Select a category
            </option>
            <option className="p-1" value="32">
              Entertainment:Cartoon & Animations
            </option>
            <option className="p-1" value="31">
              Entertainment:Anime & Manga
            </option>
          </select>
        </div>
        <div className="flex items-center justify-start gap-2">
          <select
            name=""
            className="rounded-md shadow-md p-2 w-full"
            id="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option className="p-1" value="select">
              Select difficulty
            </option>
            <option className="p-1" value="easy">
              Easy
            </option>
            <option className="p-1" value="medium">
              Medium
            </option>
            <option className="p-1" value="hard">
              Hard
            </option>
          </select>
        </div>
        <div className="flex items-center justify-start gap-2">
          <select
            name=""
            className="rounded-md shadow-md p-2 w-full"
            id="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option className="p-1" value="select">
              Select a type
            </option>
            <option className="p-1" value="multiple">
              Multiple
            </option>
            <option className="p-1" value="boolean">
              True/False
            </option>
          </select>
        </div>
      </div>
      <Link
        to="/questions"
        disabled={!category && !type && !amount && !difficulty}
        className={`font-semibold text-lg p-2 rounded-md shadow-md uppercase ${
          category && type && difficulty && amount
            ? "text-white bg-teal-400"
            : "text-slate-500 bg-teal-100"
        }`}
        onClick={() => getQuestions(category, amount, difficulty, type)}
      >
        Start
      </Link>
    </div>
  );
};

export default Home;
