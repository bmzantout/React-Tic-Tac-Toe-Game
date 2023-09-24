import './App.css';
import { useState } from 'react';
import { Board } from './components/Board';
import { ScorePanel } from './components/ScorePanel';
import { ResetButton } from './components/ResetButton';

function App() {

  const [board_list, setboard_list] = useState(Array(9).fill(null));
  const [Player_X, setPlayer_X] = useState(true);
  const [Score, setScore] = useState({Score_X: 0, Score_O: 0 });
  const [gameOver, setgameOver] = useState(false);

  const WinnigConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    
  ];

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board_list.map((value, idx) => {
      
      if (idx === boxIdx)
      {
        return Player_X === true ? "X" : "O";
      }

      else
      {
        return value;
      }
    
   })

   const winner = checkWinner(updatedBoard);

   if (winner)
   {
    if (winner === "O")
    {
     let {Score_O} = Score;
     Score_O += 1
     setScore({...Score, Score_O})
    }
 
    else 
    {
     let {Score_X} = Score;
     Score_X += 1
     setScore({...Score, Score_X})
    }
   }
  


   setboard_list(updatedBoard);
   setPlayer_X(!Player_X);
  }




  const checkWinner = (board_list) => {

    for (let i = 0; i < WinnigConditions.length; i++) 
    {
      const [a, b, c] = WinnigConditions[i];

      if (board_list[a] && board_list[a] === board_list[b] && board_list[a] === board_list[c]) 
      {
        setgameOver(true);
        return board_list[a];
      }
  }}


  const resetBoard = () =>{

  setgameOver(false);
  setboard_list(Array(9).fill(null));
  }


  return (
    <div className="App">
      <ScorePanel scores = {Score} player_X = {Player_X} />
     <Board board_list = {board_list} onClick={gameOver? resetBoard : handleBoxClick} />
     <ResetButton resetBoard = {resetBoard} /> 
    </div>
  );
}

 


export default App;
