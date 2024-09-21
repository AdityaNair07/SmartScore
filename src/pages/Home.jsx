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

  const { questions, setQuestions } = useContext(MyContext);

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

      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="amount">Number of Questions</label>
          <input
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="rounded-md shadow-md p-1 bg-white"
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter number of questions"
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="categories">Categories</label>
          <select
            name=""
            className="rounded-md shadow-md p-1"
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
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name=""
            className="rounded-md shadow-md p-1"
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
          <label htmlFor="type">Type</label>
          <select
            name=""
            className="rounded-md shadow-md p-1"
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
