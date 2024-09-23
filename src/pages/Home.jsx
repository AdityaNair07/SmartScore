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
          console.log("result", result);
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
      <h1 className="p-2 text-3xl font-semibold text-center">SmartScore</h1>
      <h3 className="p-2 text-xl font-semibold text-center">
        Interesting quizzes with tons of categories
      </h3>

      <div className="flex flex-col w-1/3 gap-4">
        <div className="flex items-center justify-between gap-2">
          <input
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="w-full p-2 bg-white rounded-md shadow-md"
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter number of questions"
            max="50"
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          <select
            name=""
            className="w-full p-2 rounded-md shadow-md"
            id="categories"
            onChange={(e) => setCategory(parseInt(e.target.value))}
          >
            <option className="p-1" value="select">
              Select a category
            </option>
            <option className="p-1" value="9">
              General Knowledge
            </option>
            <option className="p-1" value="10">
              Entertainment: Books
            </option>
            <option className="p-1" value="11">
              Entertainment: Film
            </option>
            <option className="p-1" value="12">
              Entertainment: Music
            </option>
            <option className="p-1" value="13">
              Entertainment: Musicals & Theatres
            </option>
            <option className="p-1" value="14">
              Entertainment: Television
            </option>
            <option className="p-1" value="15">
              Entertainment: Video Games
            </option>
            <option className="p-1" value="16">
              Entertainment: Board Games
            </option>
            <option className="p-1" value="17">
              Science & Nature
            </option>
            <option className="p-1" value="18">
              Science: Computers
            </option>
            <option className="p-1" value="19">
              Science: Mathematics
            </option>
            <option className="p-1" value="20">
              Mythology
            </option>
            <option className="p-1" value="21">
              Sports{" "}
            </option>
            <option className="p-1" value="22">
              Geography{" "}
            </option>
            <option className="p-1" value="23">
              History{" "}
            </option>
            <option className="p-1" value="24">
              Politics{" "}
            </option>
            <option className="p-1" value="25">
              Art{" "}
            </option>
            <option className="p-1" value="26">
              Celebrities
            </option>
            <option className="p-1" value="27">
              Animals
            </option>
            <option className="p-1" value="28">
              Vehicles
            </option>
            <option className="p-1" value="29">
              Entertainment: Comics
            </option>
            <option className="p-1" value="30">
              Science: Gadgets
            </option>
            <option className="p-1" value="31">
              Entertainment:Anime & Manga
            </option>
            <option className="p-1" value="32">
              Entertainment:Cartoon & Animations
            </option>
          </select>
        </div>
        <div className="flex items-center justify-start gap-2">
          <select
            name=""
            className="w-full p-2 rounded-md shadow-md"
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
            className="w-full p-2 rounded-md shadow-md"
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
        disabled={category && type && difficulty && amount}
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
