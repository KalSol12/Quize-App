import React,{useContext, useState} from "react";
import { Questions } from "../Helper/QuestionBank";
import { quizContext } from "../Helper/context";

export default function Quiz() {
  let {score,setScore,setGameState}=useContext(quizContext);
  let counts=0;
  const [currQusion,setCurrQuestion]=useState(0);
  const [optionChosen,setOptionChosen]=useState("");
  const nextQuestion=()=>{
    if (Questions[currQusion].Answer === optionChosen) {
      setScore(prevScore => {
        const newScore = prevScore + 1;
         // Show alert with updated score
        return newScore;
      });
    } else {
       // Show alert with current score if the answer is wrong
    }
    
    
    setCurrQuestion(currQusion+1);
  
    
  };
  const finishQuize=()=>{
    if (Questions[currQusion].Answer==optionChosen) {
      setScore(score+1);


     }
     setGameState('Endscreen');
     
  
  }
  return (<div className="Quiz">
    <h1>{Questions[currQusion].Q}</h1>
    <div className="options">
      <button onClick={()=>{setOptionChosen('A')}}>{Questions[currQusion].A}</button>
      <button onClick={()=>{setOptionChosen('B')}}>{Questions[currQusion].B}</button>
      <button onClick={()=>{setOptionChosen('C')}}>{Questions[currQusion].C}</button>
      <button onClick={()=>{setOptionChosen('D')}}>{Questions[currQusion].D}</button>
    </div>
    {currQusion==Questions.length-1 ? (<button onClick={finishQuize}>Finish Quize</button>):
    (<button onClick={nextQuestion}>Next Question</button>)};
  </div>);
}
