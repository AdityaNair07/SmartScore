import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";

const Home = () => {
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [type, setType] = useState(null);
  const { setQuestions, setTotalScore, setScore } = useContext(MyContext);
  const [error, setError] = useState(null); // Error state
  const [loading, setLoading] = useState(false);

  const getQuestions = async (category, amount, difficulty, type) => {
    setLoading(true);
    setError(null); // Clear the error before making a new request
    try {
      const result = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
      );

      const responseCode = result.data.response_code;

      if (responseCode === 0) {
        // Success
        setQuestions(result.data.results);
        setTotalScore(amount * 5);
        setScore(0);
      } else if (responseCode === 1) {
        setError("No results found for the specified criteria.");
      } else if (responseCode === 2) {
        setError("Invalid parameter provided.");
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!amount || !category || !difficulty || !type) {
      setError("Please fill out all fields."); // Set error if fields are empty
    } else if (amount > 50) {
      setError("The number of questions should be less than or equal to 50.");
    } else {
      getQuestions(category, amount, difficulty, type);
    }
  };

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value);
    setAmount(value > 0 && value <= 50 ? value : null);
  };

  useEffect(() => {
    console.log("amount:", amount);
    console.log("type of amount:", typeof amount);
    console.log("category:", category);
    console.log("type of category:", typeof category);
  }, [amount, category]);

  // const handleSubmit = () => {
  //   if (!amount || !category || !difficulty || !type) {
  //     alert("Please fill out all fields before starting the quiz.");
  //   } else if (amount > 50) {
  //     alert("The number of questions should be less than or equal to 50");
  //   } else {
  //     getQuestions(category, amount, difficulty, type);
  //   }
  // };

  // const handleAmountChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   if (value <= 50 && value > 0) {
  //     setAmount(value);
  //   } else {
  //     setAmount(null);
  //   }
  // };

  return (
    <div className="w-full h-screen bg-[#C4D7FF] flex flex-col items-center gap-3">
      <h1 className="p-5 text-3xl font-semibold text-center">SmartScore</h1>
      <h3 className="p-2 text-xl font-semibold text-center">
        Interesting quizzes with tons of categories
      </h3>

      <div className="flex flex-col w-full gap-4 px-10 mx-auto md:w-1/2 lg:w-1/3 md:px-0">
        <div className="flex items-center justify-between gap-2">
          <input
            required
            onChange={handleAmountChange}
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
            className="w-full p-2 rounded-md shadow-md"
            id="categories"
            onChange={(e) => setCategory(parseInt(e.target.value))}
          >
            <option className="p-1" value="select">
              Select a category
            </option>{" "}
            <option className="p-1" value="9">
              {" "}
              General Knowledge{" "}
            </option>{" "}
            <option className="p-1" value="10">
              {" "}
              Entertainment: Books{" "}
            </option>{" "}
            <option className="p-1" value="11">
              {" "}
              Entertainment: Film{" "}
            </option>{" "}
            <option className="p-1" value="12">
              {" "}
              Entertainment: Music{" "}
            </option>{" "}
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
              Sports
            </option>
            <option className="p-1" value="22">
              Geography
            </option>
            <option className="p-1" value="23">
              History
            </option>
            <option className="p-1" value="24">
              Politics
            </option>
            <option className="p-1" value="25">
              Art
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
              Entertainment: Comics{" "}
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
            className="w-full p-2 rounded-md shadow-md"
            id="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="select">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="flex items-center justify-start gap-2">
          <select
            className="w-full p-2 rounded-md shadow-md"
            id="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="select">Select a type</option>
            <option value="multiple">Multiple</option>
            <option value="boolean">True/False</option>
          </select>
        </div>
      </div>

      <Link
        to={category && type && difficulty && amount ? "/questions" : "#"}
        className={`font-semibold text-lg p-2 rounded-md shadow-md uppercase mt-5 bg-[#87A2FF] ${
          !category || !type || !difficulty || !amount ? "opacity-50" : ""
        }`}
        onClick={handleSubmit}
      >
        Start Quiz
      </Link>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Home;
