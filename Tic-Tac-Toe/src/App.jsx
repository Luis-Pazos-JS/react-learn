import { useState } from "react";
import "./App.css";

const TURN = {
  X: "X",
  O: "O",
};
const WINNER = {
  X: "X",
  O: "O",
  TIE: "TIE",
}
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];  
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const hunddleClick = () => {
    updateBoard(index);
  };
  
  return (
    <div onClick={hunddleClick}  className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    console.log(index);
    
    
    setTurn(newTurn);
  };
  const [turn, setTurn] = useState(TURN.X);
  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <section className="game">
        {
          
          board.map((_, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          ))
          
        }
        <section className="turn">
          <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
          <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
        </section>
      </section>
    </main>
  );
}

export default App;
