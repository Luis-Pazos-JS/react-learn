import { WINNER_COMBOS } from "../data/Const.js";

export const checkEndGame = (newBoard) => newBoard.every((square) => square !== null)

export const checkwinner = (board) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

