import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import { MyContext } from "./MyContext";
import { useState } from "react";
import Result from "./pages/Result";
import Instructions from "./pages/Instructions";

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  return (
    <>
      <MyContext.Provider
        value={{
          questions,
          setQuestions,
          score,
          setScore,
          totalScore,
          setTotalScore,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/home" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App;
