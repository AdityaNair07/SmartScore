import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import { MyContext } from "./MyContext";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState();
  return (
    <>
      <MyContext.Provider value={{ questions, setQuestions }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App;
