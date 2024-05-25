import React , { useState,useContext } from 'react'
import MainMenu from './component/MainMenu';
import quiz from './component/Quiz';
import Endscreen from './component/Endscreen';

import { quizContext } from './Helper/context';
import Quiz from './component/Quiz';

function App() {
  const [gameState,setGameState,score,setScore]=useState('menu'); 

  return (
    <div className='App'>
      <h1>Quck App</h1>
      <quizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState=="menu" &&<MainMenu/>}
      {gameState=="quiz" && <Quiz/>}
      {gameState=="Endscreen" &&<Endscreen/>}

      </quizContext.Provider>
      
  
    </div>
   
   );
}

export default App
