import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate for programmatic navigation
import { MyContext } from "../MyContext";

const Home = () => {
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [type, setType] = useState(null);
  const { setQuestions, setTotalScore, setScore } = useContext(MyContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const getQuestions = async (category, amount, difficulty, type) => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
      );
      const responseCode = result.data.response_code;
      if (responseCode === 0) {
        setQuestions(result.data.results);
        setTotalScore(amount * 5);
        setScore(0);
        navigate("/questions"); // Navigate to questions page on success
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
      setError("Please fill out all fields correctly.");
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

  return (
    <div className="w-full h-screen bg-[#C4D7FF] flex flex-col items-center gap-3">
      <h1 className="p-5 text-3xl font-semibold text-center">SmartScore</h1>
      <h3 className="p-2 text-xl font-semibold text-center">
        Interesting quizzes with tons of categories
      </h3>

      <div className="flex flex-col w-full gap-4 px-10 mx-auto md:w-1/2 lg:w-1/3 md:px-0">
        {error && <p className="text-red-500">{error}</p>} {/* Error Display */}
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
        {/* Category Select */}
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
        {/* Difficulty Select */}
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
        {/* Type Select */}
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
        {/* Submit Button */}
        <button
          disabled={loading}
          onClick={handleSubmit}
          className={`font-semibold ${
            loading ? "bg-gray-400" : "bg-blue-500"
          } p-2 rounded-md text-white`}
        >
          {loading ? "Loading..." : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Home;
