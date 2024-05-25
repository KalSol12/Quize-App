import React, { useContext } from "react";
import { Questions } from "../Helper/QuestionBank";
import { quizContext } from "../Helper/context";

function Endscreen() {
  const {score,setScore,setGameState}=useContext(quizContext)
  const restartQuiz=()=>{
    
    setGameState("menu");
    setScore(0);
  }
  return (<div className="Endscreen">
    <h1>Quiz Finish</h1>
    <h3>{" "}
    {/* {score}/{Questions.length} */}{""}
    </h3>
    { <button onClick={restartQuiz}>Restart Quiz</button> }
  </div>)
}
export default Endscreen