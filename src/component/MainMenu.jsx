import React ,{useContext} from 'react'
import { quizContext } from '../Helper/context';

function MainMenu() {
  const {gameState,setGameState}=useContext(quizContext);
  return (
    <div className='Menu'>
      <button onClick={()=>{
        setGameState("quiz")
      }}>Start Quiz</button>
    </div>
  );
}

export default MainMenu
